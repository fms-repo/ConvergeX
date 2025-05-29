/**
 * Handle css class by using Media query
 * @alias xs, sm, md, lg, xl
 */

var mq = {
  smUp: "screen and (min-width: 600px)",
  mdUp: "screen and (min-width: 960px)",
  lgUp: "screen and (min-width: 1280px)",
  xlUp: "screen and (min-width: 1440px)",
  smDown: "screen and (max-width: 599px)",
  mdDown: "screen and (max-width: 959px)",
  lgDown: "screen and (max-width: 1279px)",
  xlDown: "screen and (max-width: 1439px)",
  sm: "screen and (min-width: 600px) and (max-width: 960px)",
  md: "screen and (min-width: 960px) and (max-width: 1280px)",
  lg: "screen and (min-width: 1280px) and (max-width: 1440px)",
  xl: "screen and (min-width: 1400px) and (max-width: 2560px)",
}

function mqAddClass(selectors) {
  $('#main-wrap').addClass(selectors);
}

function mqRemoveClass(selectors) {
  $('#main-wrap').removeClass(selectors);
}

// Define handler action
var handler_smUp = {
      match : function() { mqAddClass('mq-sm-up')},
      unmatch : function() { mqRemoveClass('mq-sm-up')}
    },
    handler_mdUp = {
      match : function() { mqAddClass('mq-md-up')},
      unmatch : function() { mqRemoveClass('mq-md-up')}
    },
    handler_lgUp = {
      match : function() { mqAddClass('mq-lg-up')},
      unmatch : function() { mqRemoveClass('mq-lg-up')}
    },
    handler_xlUp = {
      match : function() { mqAddClass('mq-xl-up')},
      unmatch : function() { mqRemoveClass('mq-xl-up')}
    },
    handler_smDown = {
      match : function() { mqAddClass('mq-sm-down')},
      unmatch : function() { mqRemoveClass('mq-sm-down')}
    },
    handler_mdDown = {
      match : function() { mqAddClass('mq-md-down')},
      unmatch : function() { mqRemoveClass('mq-md-down')}
    },
    handler_lgDown = {
      match : function() { mqAddClass('mq-lg-down')},
      unmatch : function() { mqRemoveClass('mq-lg-down')}
    },
    handler_xlDown = {
      match : function() { mqAddClass('mq-xl-down')},
      unmatch : function() { mqRemoveClass('mq-xl-down')}
    },
    handler_sm = {
      match : function() { mqAddClass('mq-sm')},
      unmatch : function() { mqRemoveClass('mq-sm')}
    },
    handler_md = {
      match : function() { mqAddClass('mq-md')},
      unmatch : function() { mqRemoveClass('mq-md')}
    },
    handler_lg = {
      match : function() { mqAddClass('mq-lg')},
      unmatch : function() { mqRemoveClass('mq-lg')}
    },
    handler_xl = {
      match : function() { mqAddClass('mq-xl')},
      unmatch : function() { mqRemoveClass('mq-xl')}
    };

// Register to enquire.js
enquire
  .register(mq.smUp, handler_smUp)
  .register(mq.mdUp, handler_mdUp)
  .register(mq.lgUp, handler_lgUp)
  .register(mq.xlUp, handler_xlUp)
  .register(mq.smDown, handler_smDown)
  .register(mq.mdDown, handler_mdDown)
  .register(mq.lgDown, handler_lgDown)
  .register(mq.xlDown, handler_xlDown)
  .register(mq.sm, handler_sm)
  .register(mq.md, handler_md)
  .register(mq.lg, handler_lg)
  .register(mq.xl, handler_xl);
