import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('orgs', {}, function() {});
  this.route('org', {path: 'org/:id'}, function() {
    this.route('repos', {});
    this.route('repo', {path: ':repoid'}, function() {
      this.route('contributors', {});
      this.route('issues', {});
    });
  });
  this.route('notfound', {path: '*path'});
});

export default Router;
