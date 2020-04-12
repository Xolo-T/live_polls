# == Schema Information
#
# Table name: options
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  poll_id    :integer          not null
#  count      :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Option < ApplicationRecord
    validates :title, presence: true
    validates :poll_id, presence: true


    belongs_to :poll,
        foreign_key: :poll_id,
        class_name: 'Poll'

end
