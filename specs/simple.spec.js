describe("blink plugin", function() {

    beforeEach(function() {
        this.addMatchers({
            toHaveClass: function(className) {
                return this.actual.hasClass(className);
            }
        });
    });

    it("sets the blink attribute", function() {
        var fixture = $('<div data-igefa-widget="blink">Blink!</div>');
        $(fixture).blink();

        expect(fixture).toHaveClass("blink");
    });
});
