class CreateAppointments < ActiveRecord::Migration[7.0]
  def change
    create_table :appointments do |t|
      t.text :title
      t.text :desc
      t.datetime :time
      t.datetime :date

      t.timestamps
    end
  end
end
