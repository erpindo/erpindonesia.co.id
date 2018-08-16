# -*- coding: utf-8 -*-
from odoo import http
from odoo.http import request


class ContactNameCard(http.Controller):

    @http.route('/contact/', auth='public')
    def contact(self, **kw):
        values = {
            'content': 'test',
        }
        return http.request.render('erpi_contact_page.catp_nc_page_template', values)
