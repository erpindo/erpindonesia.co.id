# -*- coding: utf-8 -*-
from odoo import http
from odoo.http import request

import json
import werkzeug
import itertools
import pytz
import babel.dates
from collections import OrderedDict

from odoo import http, fields, _
from odoo.addons.http_routing.models.ir_http import slug, unslug
from odoo.addons.website.controllers.main import QueryURL
from odoo.exceptions import UserError
from odoo.http import request
from odoo.tools import html2plaintext


class erpiCompany(http.Controller):
    _blog_post_per_page = 3
    _post_comment_per_page = 10
    @http.route('/home', type='http',auth='public',website=True,page=True)
    def index(self,  blog=None, tag=None, page=1, **opt):
        # Blog = request.env['blog.blog']
        # blogs = Blog.search([], limit=3)
        
        BlogPost = request.env['blog.post']
        # total = BlogPost.search([], count=True)

        # pager = request.website.pager(
        #     url='/blog',
        #     total=total,
        #     page=page,
        #     step=self._blog_post_per_page,
        # )
        getIdNews = request.env['blog.tag'].search([(
            'name','=', 'News'
        )],)
        posts = BlogPost.search([(
            'tag_ids', '=',getIdNews.id
        )], offset=(page - 1) * self._blog_post_per_page, limit=self._blog_post_per_page)
        blog_url = QueryURL('', ['blog', 'tag'])

        return http.request.render('erpi_theme_company.catp_comp_home',{
            'posts': posts,
            # 'pager': pager,
            'blog_url': blog_url,
        })

    @http.route('/about', type='http',auth='public',website=True,page=True)
    def about(self, **kw):
        return http.request.render('erpi_theme_company.catp_comp_about')
    
    @http.route('/services', type='http',auth='public',website=True,page=True)
    def services(self, **kw):
        return http.request.render('erpi_theme_company.catp_comp_services')

