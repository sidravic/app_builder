class CreateRepos < ActiveRecord::Migration
  def self.up
    create_table :repos do |t|
      t.string :name
      t.string :category, :default => 'RAILS'
      t.string :test_framework, :default => 'TEST UNIT' 
      t.string :js_framework, :default => 'PROTOTYPE'
      t.string :database, :default => 'SQLITE3'

      t.timestamps
    end
  end

  def self.down
    drop_table :repos
  end
end
