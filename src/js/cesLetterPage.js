'use strict';
import 'babelify/polyfill';
import domready from 'domready';
import applyDropFirstColumnWhenPrinting from './applyDropFirstColumnWhenPrinting';
import applyFollowingClassNames from './applyFollowingClassNames';
import applyResponsiveTableClassNames from './applyResponsiveTableClassNames';
import applyCheckedClassToTdsWithCheckmark from './applyCheckedClassToTdsWithCheckmark';
import applyPictureRowClasses from './applyPictureRowClasses';

domready(() => {
  applyResponsiveTableClassNames();
  applyDropFirstColumnWhenPrinting();
  applyFollowingClassNames();
  applyCheckedClassToTdsWithCheckmark();
  applyPictureRowClasses();
});