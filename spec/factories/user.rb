FactoryGirl.define do
  factory :user do
    first_name 'John'
    last_name 'Doe'
    fb_uid '1'
    access_token 'a'

      factory :john_travolta do
        first_name 'John'
        last_name 'Travolta'
        fb_uid '2'
        access_token 'b'
      end
  end
end