class Doctor < ApplicationRecord
has_many :appointment

validates :name, :desc, presence:true
end

