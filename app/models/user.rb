class User < ApplicationRecord
has_many :appointment
has_many :doctors, through: appointments

validates :name, uniqueness: true

end
