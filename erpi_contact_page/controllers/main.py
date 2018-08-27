# -*- coding: utf-8 -*-
from odoo import http
from odoo.http import request


class ContactNameCard(http.Controller):

    @http.route('/contacts/', auth='public',website=True)
    def contact(self, **kw):
        return http.request.render('erpi_contact_page.catp_nc_page_template')

