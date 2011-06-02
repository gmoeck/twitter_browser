# ==========================================================================
# Project:   TwitterBrowser
# Copyright: @2011 My Company, Inc.
# ==========================================================================

# Add initial buildfile information here
config :all, :required => "sproutcore", :theme => "sproutcore/empty_theme"
proxy '/', :to => 'localhost:3000'
