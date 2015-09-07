'use strict';
import 'babelify/polyfill';
import './main';
import updateStatsDisplay from './updateStatsDisplay';
import updateVisitCountDisplay from './updateVisitCountDisplay';
import './footer';

updateStatsDisplay(50);
updateVisitCountDisplay(10);