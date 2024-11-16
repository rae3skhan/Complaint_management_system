    import React, { useState } from 'react';

    const Complaint = () => {
      const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        complaintType: '',
        complaintDescription: '',
      });

      const [errors, setErrors] = useState({});

      const handleChange = (e) => {
        const { name, value, type,} = e.target;
        if (type === 'checkbox') {
          setFormData({ ...formData, [name]: checked });
        } 
        else {
          setFormData({ ...formData, [name]: value });
        }
      };

      const validateForm = () => {
        let formErrors = {};
        if (!formData.fullName) formErrors.fullName = 'Full Name is required';
        if (!formData.email) formErrors.email = 'Email is required';
        if (!formData.phone) formErrors.phone = 'Phone number is required';
        if (!formData.complaintType) formErrors.complaintType = 'Complaint Type is required';
        if (!formData.complaintDescription) formErrors.complaintDescription = 'Complaint Description is required';
        setErrors(formErrors);

        return Object.keys(formErrors).length === 0;
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
          console.log('Form data submitted:', formData);
          setFormData({
            fullName: '',
            email: '',
            phone: '',
            complaintType: '',
            complaintDescription: '',
          });
          alert('Complaint submitted successfully!');
        }
      };
    
      return (
        <div className="compliant-container">
          <h2 className="text-center mb-4 py-3">Complaint Here</h2>
          <form onSubmit={handleSubmit}>
            <div className="card mb-4 ">
              <div className="card-header bg-success text-white">
                <h5>User Information</h5>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                  {errors.fullName && <div className="text-danger">{errors.fullName}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <div className="text-danger">{errors.email}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && <div className="text-danger">{errors.phone}</div>}
                </div>
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-header bg-success text-white">
                <h5>Complaint Information</h5>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <label htmlFor="complaintType" className="form-label">Complaint Type</label>
                  <select
                    className="form-select "
                    id="complaintType"
                    name="complaintType"
                    value={formData.complaintType}
                    onChange={handleChange}

                  >
                    <option value="">Select Complaint Type</option>
                    <option value="Technical Issue bg" >Technical Issue</option>
                    <option value="Billing Issue">Billing Issue</option>
                    <option value="Customer Service">Customer Service</option>
                    <option value="Product Defect">Product Defect</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.complaintType && <div className="text-danger">{errors.complaintType}</div>}
                </div>
                <div className="mb-1">
                  <label htmlFor="complaintDescription" className="form-label">Complaint Description</label>
                  <textarea
                    className="form-control"
                    id="complaintDescription"
                    name="complaintDescription"
                    rows="4"
                    value={formData.complaintDescription}
                    onChange={handleChange}
                  ></textarea>
                  {errors.complaintDescription && <div className="text-danger">{errors.complaintDescription}</div>}
                  <div className="text-center">
              <button type="submit" className="btn btn-success mt-2">Submit Complaint</button>
            </div>
                </div>
              </div>
            </div>
            
          </form>
        </div>
      );
    };

    export default Complaint;
