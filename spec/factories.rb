Factory.define :repo do |f|
  f.sequence(:name){|n| "Project_#{n}"}
  f.category "RAILS"
  f.test_framework "TEST UNIT"
  f.js_framework "PROTOTYPE"
  f.database "SQLITE3"  
end