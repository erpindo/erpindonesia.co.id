# -*- coding: utf-8 -*-
from odoo import http
from odoo.http import request


class erpiCompany(http.Controller):

    @http.route('/home', type='http',auth='public',website=True,page=True)
    def index(self, **kw):
        return http.request.render('erpi_theme_company.catp_comp_home')

    @http.route('/about', type='http',auth='public',website=True,page=True)
    def about(self, **kw):
        return http.request.render('erpi_theme_company.catp_comp_about')

