class DefaultTruckImage < ActiveRecord::Migration[5.1]
  def change
    change_column_default :trucks, :image, ''
  end
end
