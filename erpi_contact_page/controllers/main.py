# -*- coding: utf-8 -*-
from odoo import http
from odoo.http import request
from odoo.exceptions import AccessError
from odoo.tools import consteq


class ContactNameCard(http.Controller):

    def _contact_check_access(self, contact_id, access_token=None):
        contact = request.env['hr.employee'].browse([contact_id])
        contact_sudo = contact.sudo()
        try:
            contact.check_access_rights('read')
            contact.check_access_rule('read')
        except AccessError:
            if not access_token or not consteq(contact_sudo.access_token, access_token):
                raise
        return contact_sudo

    def _contact_get_page_view_values(self, contact, access_token, **kwargs):
        values = {
            'page_name': 'contact',
            'contact': contact,
            }
        if access_token:
            values['no_breadcrumbs'] = True
            values['access_token'] = access_token
        if kwargs.get('error'):
            values['error'] = kwargs['error']
        if kwargs.get('warning'):
            values['warning'] =  kwargs['warning']
        if kwargs.get('success'):
            values['success'] = kwargs['success']
        return values

    @http.route(['/contact/<int:contact_id>'], auth='public', type='http', website=True)
    def contact(self, contact_id, access_token=None, **kw):
        try:
            contact_sudo = self._contact_check_access(contact_id, access_token)
        except AccessError:
            return request.redirect('/contact')
        values = self._contact_get_page_view_values(contact_sudo, access_token, **kw)
        return http.request.render('erpi_contact_page.catp_nc_page_template', values)
