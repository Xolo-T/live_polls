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
require 'test_helper'

class OptionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
