describe("list plugin", function() {

    beforeEach(function() {
        this.addMatchers({
            hasChildren: function(count, type) {
                return this.actual.find(type).length === count;
            }
        });
    });

    it("does not contain anything after startup", function() {
        var fixture = $('<ul data-igefa-widget="list"></ul>');
        $(fixture).list();

        expect(fixture).hasChildren(0, "li");
    });

    it("inserts <li> on event", function() {
        var fixture = $('<ul data-igefa-widget="list"></ul>');
        $(fixture).list();
        $(fixture).trigger("igefa-list-add");

        expect(fixture).hasChildren(1, "li");
    });

    it("inserts 2 <li> on two events", function() {
        var fixture = $('<ul data-igefa-widget="list"></ul>');
        $(fixture).list();
        $(fixture).trigger("igefa-list-add");
        $(fixture).trigger("igefa-list-add");

        expect(fixture).hasChildren(2, "li");
    });

    it("clears list on clear event", function() {
        var fixture = $('<ul data-igefa-widget="list"></ul>');
        $(fixture).list();
        $(fixture).trigger("igefa-list-add");
        $(fixture).trigger("igefa-list-clear");

        expect(fixture).hasChildren(0, "li");
    });
});
