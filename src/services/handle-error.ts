import request from 'axios';
import { ErrorType } from '../types/types';
import { HTTP_CODE } from '../const';
import { toast } from 'react-toastify';

export const handleError = (error: ErrorType): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const { response } = error;

  if (response) {
    switch (response.status) {
      case HTTP_CODE.BAD_REQUEST:
        toast.error(response.data.error);
        break;
      case HTTP_CODE.NOT_FOUND:
        toast.info(response.data.error);
        break;
      default:
        toast.info(response.data.error);
        break;
    }
  }
};
