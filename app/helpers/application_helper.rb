module ApplicationHelper
  def error_on(object, method)
    if object.errors.any?
      errors = ""
      object.errors[method.to_sym].each {|error| errors << error + ". "}
    end
  end
end
