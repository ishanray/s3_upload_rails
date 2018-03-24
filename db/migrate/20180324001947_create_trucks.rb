class CreateTrucks < ActiveRecord::Migration[5.1]
  def change
    create_table :trucks do |t|
      t.numeric :tonnage
      t.numeric :crew

      t.timestamps
    end
  end
end
