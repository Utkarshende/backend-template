/**
 * @desc    Send a standardized success response
 * @param   {object} res - Express response object
 * @param   {number} statusCode - HTTP status code
 * @param   {string} message - Success message
 * @param   {any} data - Data to send (Object, Array, etc.)
 */
export const sendSuccess = (res, statusCode = 200, message = 'Success', data = {}) => {
    res.status(statusCode).json({
      success: true,
      message,
      data,
    });
  };