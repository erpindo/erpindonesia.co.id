# -*- encoding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.

{
    'name': 'Company Profile Purple Theme',
    'category': 'Theme',
    'sequence': 900,
    'version': '1.0',
    'depends': ['website'],
    'version':'11.0.1.0',
    'author': "PT. ERP Indonesia",
    'website': "https://www.erpindonesia.co.id",
    'data': [
        'views/test.xml',
        'views/assets.xml',
        'views/layout.xml',
        'views/snippets.xml',
        'views/snip_options.xml',
        'views/home.xml',
        'views/about.xml',
        # 'views/services.xml',
        # 'views/replace.xml',
    ],
    'images': [
        'static/description/cover.jpg',
		'static/description/icon.png'
    ],
    'application': True,
    'installable':True,
    'auto_install':False,
}
