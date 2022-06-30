class Appointment < ApplicationRecord
belongs_to :user
belongs_to :doctor

validates :title, :desc, :date, time:, presence: true 

end

