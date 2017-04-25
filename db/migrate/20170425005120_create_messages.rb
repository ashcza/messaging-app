class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.text :content
      t.datetime :time
      t.string :sender
      t.timestamps
    end
  end
end
