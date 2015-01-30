(function($) {
    $.fn.list = function(options) {
        var addElement = function(event) {
            $(event.target).append("<li>Element</li>");
        };

        var clearList = function(event) {
            $(event.target).empty();
        };

        return this.each(function(key, value) {
            $(value).on("igefa-list-add", addElement);
            $(value).on("igefa-list-clear", clearList);
        });
    };
}(jQuery));

$("*[data-igefa-widget=list]").list();
