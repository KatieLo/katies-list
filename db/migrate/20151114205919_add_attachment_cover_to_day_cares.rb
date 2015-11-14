class AddAttachmentCoverToDayCares < ActiveRecord::Migration
  def self.up
    change_table :day_cares do |t|
      t.attachment :cover
    end
  end

  def self.down
    remove_attachment :day_cares, :cover
  end
end
