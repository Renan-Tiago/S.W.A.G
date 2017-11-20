$(document).ready(function () {

    var number = Math.floor((Math.random() * 4) + 1);
    if (number == 1) {
        $('#fav-icon').attr('href', 'IMAGES/NHL.png');
    } else if (number == 2) {
        $('#fav-icon').attr('href', 'IMAGES/MLB.png');
    } else if (number == 3) {
        $('#fav-icon').attr('href', 'IMAGES/NBA.png');
    } else if (number == 4) {
        $('#fav-icon').attr('href', 'IMAGES/NFL.png');
    }
    number += 1;
    setTimeout(arguments.callee, 1000);
});

$(function () {
    $('.button-checkbox').each(function () {

        // Settings
        var $widget = $(this),
                $button = $widget.find('button'),
                $checkbox = $widget.find('input:checkbox'),
                color = $button.data('color'),
                settings = {
                    on: {
                        icon: 'glyphicon glyphicon-check'
                    },
                    off: {
                        icon: 'glyphicon glyphicon-unchecked'
                    }
                };

        // Event Handlers
        $button.on('click', function () {
            $checkbox.prop('checked', !$checkbox.is(':checked'));
            $checkbox.triggerHandler('change');
            updateDisplay();
        });
        $checkbox.on('change', function () {
            updateDisplay();
        });

        // Actions
        function updateDisplay() {
            var isChecked = $checkbox.is(':checked');

            // Set the button's state
            $button.data('state', (isChecked) ? "on" : "off");

            // Set the button's icon
            $button.find('.state-icon')
                    .removeClass()
                    .addClass('state-icon ' + settings[$button.data('state')].icon);

            // Update the button's color
            if (isChecked) {
                $button
                        .removeClass('btn-default')
                        .addClass('btn-' + color + ' active');
            } else {
                $button
                        .removeClass('btn-' + color + ' active')
                        .addClass('btn-default');
            }
        }

        // Initialization
        function init() {

            updateDisplay();

            // Inject the icon if applicable
            if ($button.find('.state-icon').length == 0) {
                $button.prepend('<i class="state-icon ' + settings[$button.data('state')].icon + '"></i>');
            }
        }
        init();
    });
});

