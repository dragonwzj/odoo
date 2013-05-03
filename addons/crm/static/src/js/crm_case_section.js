openerp.crm = function(openerp) {
    openerp.web_kanban.KanbanRecord.include({
        on_card_clicked: function() {
            if (this.view.dataset.model === 'crm.case.section') {
                this.$('.oe_kanban_crm_salesteams_list a').first().click();
            } else {
                this._super.apply(this, arguments);
            }
        },
    });

    openerp.crm.SparklineBarWidget = openerp.web_kanban.AbstractField.extend({
        className: "oe_sparkline_bar",
        start: function() {
            var self = this;
            var title = this.$node.html();
            setTimeout(function () {
                self.$el.sparkline(self.field.value, {type: 'bar', barWidth: 5} );
                self.$el.tipsy({'delayIn': 0, 'html': true, 'title': function(){return title}, 'gravity': 'n'});
            }, 0);
        },
    });
    openerp.web_kanban.fields_registry.add("sparkline_bar", "openerp.crm.SparklineBarWidget");

};
