# -*- encoding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.

{
    'name': 'Company Profile Blue Theme',
    'summary': 'Odoo Theme for ERPI Company Profile',
    'description': 'This theme install as full theme, not module. -catp-',
    'category': 'Theme',
    'sequence': 900,
    'version': '1.0',
    'depends': ['website'],
    'version':'1.0',
    'author':'catp',
    'data': [
        'views/test.xml',
        'views/assets.xml',
        'views/layout.xml',
        'views/snippets.xml',
        'views/snip_options.xml',
        'views/home.xml',
    ],
    'images': [
        'static/description/icon.jpg'
    ],
    'application': True,
    'installable':True,
    'auto_install':False,
}
