class CreatePatterns < ActiveRecord::Migration[6.1]
  def change
    create_table :patterns do |t|
      t.string :location
      t.string :note
      t.string :instrument
      t.string :fx

      t.timestamps
    end
  end
end
