class AddWebsiteToDaycares < ActiveRecord::Migration
  def change
    add_column :day_cares, :website, :string
  end
end
