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

      factory :samuel_jackson do
        first_name 'Samuel'
        last_name 'Jackson'
        fb_uid '3'
        access_token 'c'
      end
  end
end