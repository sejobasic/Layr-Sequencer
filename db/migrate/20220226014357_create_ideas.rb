
class CreateIdeas < ActiveRecord::Migration[6.1]
  def change
    create_table :ideas do |t|
      t.binary :saved_ideas
      t.string :genre
      t.string :note
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :pattern, null: false, foreign_key: true

      t.timestamps
    end
  end
end
