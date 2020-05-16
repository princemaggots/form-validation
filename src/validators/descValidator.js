const descValidator = value => /^[\w\s.,?()!"\d]*$/.test(value);

export default descValidator;