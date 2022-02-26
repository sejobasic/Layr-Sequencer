class CreateIdeas < ActiveRecord::Migration[6.1]
  def change
    create_table :ideas do |t|
      t.bytea :saved_ideas
      t.string :genre
      t.string :note
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
