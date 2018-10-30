# -*- coding: utf-8 -*-
import datetime
from odoo.tests.common import SingleTransactionCase
from odoo.tools import DEFAULT_SERVER_DATE_FORMAT as DATE_FORMAT


class TestIrSequenceDateRangeStandard(SingleTransactionCase):
    """ A few tests for a 'Standard' (i.e. PostgreSQL) sequence. """

    def test_ir_sequence_date_range_1_create(self):
        """ Try to create a sequence object with date ranges enabled. """
        seq = self.env['ir.sequence'].create({
            'code': 'test_sequence_date_range',
            'prefix': '%(year)s/%(month)s/%(day)s/',
            'padding': 4,
            'name': 'Test sequence',
            'range_interval': 'monthly',
            'use_date_range': True,
        })
        self.env['ir.sequence.date_range'].create({
            'sequence_id': seq.id,
            'date_from': '2018-08-01',
            'date_to': '2018-08-31',
            'number_next': 300,
        })
        n = seq.with_context(ir_sequence_date='2018-08-31').next_by_code(
            'test_sequence_date_range')
        self.assertEqual('2018/08/31/0001', n, "Wrong sequence")
        n = seq.with_context(ir_sequence_date='2018-08-31').next_by_code(
            'test_sequence_date_range')
        self.assertEqual('2018/08/31/0002', n, "Wrong sequence")
        n = seq.with_context(ir_sequence_date='2018-08-31').next_by_code(
            'test_sequence_date_range')
        self.assertEqual('2018/08/31/0003', n, "Wrong sequence")
        n = seq.with_context(ir_sequence_date='2018-10-02').next_by_code('test_sequence_date_range')
        found = seq.date_range_ids.filtered(lambda a:
                                            a.date_from == '2018-10-02'
                                            and a.date_to == '2018-10-31')
        self.assertTrue(len(found) == 1)
        self.assertEqual('2018/10/02/0001', n, "Wrong sequence")
        n = seq.with_context(ir_sequence_date='2018-12-01').next_by_code(
            'test_sequence_date_range')
        self.assertEqual('2018/12/01/0001', n, "Wrong sequence")
        found = seq.date_range_ids.filtered(lambda a:
                                            a.date_from == '2018-12-01'
                                            and a.date_to == '2018-12-31')
        self.assertTrue(len(found) == 1)
