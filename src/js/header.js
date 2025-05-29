var darkMode = 'true';
if (typeof Storage !== 'undefined') { // eslint-disable-line
  darkMode = localStorage.getItem('bungalionDark') || 'true';
}

var $header = $('#header'),
    $menu = $('#mobile_menu'),
    $slideMenu = $('#slide-menu'),
    isOpen = false,
    isOpenHamburger = false;

document.addEventListener('DOMContentLoaded', function() {
  // initial dropdown
  var dropdownTrigger = document.querySelectorAll('.dropdown-trigger');
  var instancesDropdown = M.Dropdown.init(dropdownTrigger, {
    closeOnClick: false,
    alignment: 'left'
  });

  // Dropdown list hover
  var droplistHover = document.querySelectorAll('.droplist-trigger-hover');
  var $droplistHover = M.Dropdown.init(droplistHover, {
    closeOnClick: false,
    alignment: 'left',
    hover: true,
    coverTrigger: false,
  });

  var droplistHoverChild = document.querySelectorAll('.droplist-trigger-hover-child');
  var $droplistHoverChild = M.Dropdown.init(droplistHoverChild, {
    closeOnClick: false,
    alignment: 'right',
    hover: true,
    onOpenStart: function(elem) {
      var sibling = $(elem).parent().siblings().find('.droplist-trigger-hover-child');
      for(var i=0; i<sibling.length; i++) {
        M.Dropdown.getInstance(sibling[i]).close();
      }
    }
  });

  // Dropdown list click
  var droplistClick = document.querySelectorAll('.droplist-trigger-click');
  var $droplistClick = M.Dropdown.init(droplistClick, {
    closeOnClick: false,
    alignment: 'left',
    coverTrigger: false,
  });

  var droplistClickChild = document.querySelectorAll('.droplist-trigger-click-child');
  var $droplistClickChild = M.Dropdown.init(droplistClickChild, {
    closeOnClick: false,
    alignment: 'right',
    onOpenStart: function(elem) {
      var sibling = $(elem).parent().siblings().find('.droplist-trigger-click-child');
      for(var i=0; i<sibling.length; i++) {
        M.Dropdown.getInstance(sibling[i]).close();
      }
    }
  });

  // Megamenu click
  var megaClick = document.querySelectorAll('.megamenu-trigger-click');
  var $megaMenu = $('.mega-menu');

  var $megaClick = M.Dropdown.init(megaClick, {
    closeOnClick: false,
    alignment: 'left',
    coverTrigger: false,
    constrainWidth: true,
    container: $('#container_menu'),
    onOpenEnd: function() {
      $header.addClass('open-drawer');
      $('.megamenu-trigger-click').removeClass('active');
      $(this.el).addClass('active');
    },
    onCloseEnd: function() {
      $header.removeClass('open-drawer');
    }
  });
  
  $(document).click(function(e) {
    var target = e.target;
    if($(target).parents('.mega-menu-root').length <= 0) {
      $header.removeClass('open-drawer');
      $('.megamenu-trigger-click').removeClass('active');
    }
  })
});

$(document).ready(function(){
  // Dark and Light mode config
  if(darkMode === 'false') {
    $('#app').removeClass('theme--dark');
    $('#app').addClass('theme--light');
    $('#theme_switcher').prop('checked', true);
  }
  $('.menu-setting .switch input[type="checkbox"]').change(function() {
    if($(this).is(':checked')) {
      // dark
      localStorage.setItem('bungalionDark', "true");
      $('#app').removeClass('theme--light');
      $('#app').addClass('theme--dark');
    } else {
      // light
      localStorage.setItem('bungalionDark', "false");
      $('#app').removeClass('theme--dark');
      $('#app').addClass('theme--light');
    }
  });

  // Initial sidenav for mobile menu
  $('#mobile_menu').click(function() {
    isOpen = !isOpen;
    if(isOpen) {
      $('.sidenav').sidenav('open')  
    } else {
      $('.sidenav').sidenav('close');
      return false;
    }
  });

  // Hamburger menu
  function openMenu() {
    $('#main_menu').fadeIn();
    $header.addClass('open-drawer');
    $menu.addClass('is-active');
    $slideMenu.addClass('menu-open');
  }

  function closeMenu() {
    $('#main_menu').fadeOut();
    $header.removeClass('open-drawer');
    $menu.removeClass('is-active');
    $slideMenu.removeClass('menu-open');
  }

  $('#hamburger_menu').click(function() {
    isOpenHamburger = !isOpenHamburger;
    if(isOpenHamburger) {
      openMenu();
      $(this).addClass('is-active');
    } else {
      closeMenu();
      $(this).removeClass('is-active');
    }
  });
  
  $('#main_menu a').click(function() {
    closeMenu();
    isOpenHamburger = false;
  })

  // SideNav
  $('.sidenav').sidenav({
    onOpenStart: function() {
      isOpen = true;
      $header.addClass('open-drawer');
      $menu.addClass('is-active');
      $slideMenu.addClass('menu-open');
    },
    onCloseEnd: function() {
      isOpen = false;
      $header.removeClass('open-drawer');
      $menu.removeClass('is-active');
      $slideMenu.removeClass('menu-open');
    },
    edge: 'right'
  });
});