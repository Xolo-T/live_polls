# == Schema Information
#
# Table name: polls
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  author_id  :integer          not null
#  group      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Poll < ApplicationRecord
    validates :title, presence: true
    validates :author_id, presence: true

    belongs_to :author,
        foreign_key: :author_id,
        class_name: 'User'

end
