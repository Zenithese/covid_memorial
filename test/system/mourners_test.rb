require "application_system_test_case"

class MournersTest < ApplicationSystemTestCase
  setup do
    @mourner = mourners(:one)
  end

  test "visiting the index" do
    visit mourners_url
    assert_selector "h1", text: "Mourners"
  end

  test "creating a Mourner" do
    visit mourners_url
    click_on "New Mourner"

    fill_in "Employer", with: @mourner.employer
    fill_in "First name", with: @mourner.first_name
    fill_in "Job title", with: @mourner.job_title
    fill_in "Last name", with: @mourner.last_name
    fill_in "Union", with: @mourner.union
    click_on "Create Mourner"

    assert_text "Mourner was successfully created"
    click_on "Back"
  end

  test "updating a Mourner" do
    visit mourners_url
    click_on "Edit", match: :first

    fill_in "Employer", with: @mourner.employer
    fill_in "First name", with: @mourner.first_name
    fill_in "Job title", with: @mourner.job_title
    fill_in "Last name", with: @mourner.last_name
    fill_in "Union", with: @mourner.union
    click_on "Update Mourner"

    assert_text "Mourner was successfully updated"
    click_on "Back"
  end

  test "destroying a Mourner" do
    visit mourners_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Mourner was successfully destroyed"
  end
end
