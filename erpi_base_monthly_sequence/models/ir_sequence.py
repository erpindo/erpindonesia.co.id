# -*- coding: utf-8 -*-
"""file contain modified ir sequence models"""
from calendar import monthrange
from odoo import fields, models
import logging
_logger = logging.getLogger(__name__)


class IrSequence(models.Model):
    """inherit ir sequence class and add new functionality"""
    _inherit = "ir.sequence"

    range_interval = fields.Selection(
        [('monthly', 'Monthly'), ('yearly', 'Yearly')], default='monthly')

    def _create_date_range_seq(self, date):
        if self.range_interval == 'monthly':
            year = fields.Date.from_string(date).strftime('%Y')
            month = fields.Date.from_string(date).strftime('%m')
            last_day_in_month = monthrange(int(year), int(month))[1]
            # contruct last month for new month
            last_day_in_month = str(year) + '-' + str(
                month) + '-' + str(last_day_in_month)
            date_from = date
            date_to = last_day_in_month
            seq_date_range = \
                self.env['ir.sequence.date_range'].sudo().create({
                    'date_from': date_from,
                    'date_to': date_to,
                    'sequence_id': self.id,
                })
            return seq_date_range
        else:
            return super(IrSequence, self)._create_date_range_seq(date)
