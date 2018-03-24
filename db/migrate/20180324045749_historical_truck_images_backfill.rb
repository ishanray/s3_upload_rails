class HistoricalTruckImagesBackfill < ActiveRecord::Migration[5.1]
  def change
    Truck.reset_column_information
    Truck.update_all(image: '')
  end
end
