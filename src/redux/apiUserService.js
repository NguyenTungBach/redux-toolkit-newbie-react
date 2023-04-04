
import axios from 'axios';
import { toast } from 'react-toastify';
import { userDeleteFailed, userDeleteStart, userDeleteSuccess, userDetailFailed, userDetailStart, userDetailSuccess, userFailed, userStart, userSuccess } from './userServiceSilce';


export const getAllUser = async (dispatch) => {
    dispatch(userStart());
    try {
        const res = await axios.get('http://localhost:8078/api/v1/admin/user'
        // ,{
        //     headers: { Authorization: `Bearer ${accessToken}` },
        // }
        );
        dispatch(userSuccess(res.data));
        toast.success(" thành công");
        // navigate('/system/manage-type-service');
    } catch (err) {
        dispatch(userFailed());
        toast.error(err.response.data.message);
    }
}

export const createForUser = async (data,dispatch) => {
    dispatch(userStart());
    try {
        const res = await axios.post('http://localhost:8078/api/v1/admin/user',data
        );
        toast.success("tạo nguoi vụ thành công");
    } catch (err) {
        toast.error(err.response.data.message);
    }
}

export const getDetailUser = async (id,dispatch) => {
    dispatch(userDetailStart());
    try {
        const res = await axios.get('http://localhost:8078/api/v1/admin/user/'+id);
        dispatch(userDetailSuccess(res.data));
    } catch (err) {
        dispatch(userDetailFailed());
        toast.error(err.response.data.message);
    }
}

export const updateForUser = async (id,data,dispatch) => {
    dispatch(userStart());
    try {
        const res = await axios.put('http://localhost:8078/api/v1/admin/updateUser/'+id,data);
        toast.success("sửa loại dịch vụ thành công");
        
    } catch (err) {
        dispatch(userFailed(err.response.data.message));
        toast.error(err.response.data.message);
    }
}

export const deleteForUser = async (id,dispatch) => {
    dispatch(userDeleteStart());
    try {
        await axios.get('http://localhost:8078/api/v1/admin/userDelete/' + id);
        dispatch(userDeleteSuccess());
        toast.success("xóa loại dịch vụ thành công");
    } catch (err) {
        dispatch(userDeleteFailed());
        toast.error(err.response.data.message);
    }
}

// export const searchTypeService = async (typeService,dispatch) => {
//     dispatch(typeServiceStart());
//     try {
//         const res = await axios.post('http://localhost:8078/api/v1/type_service/search',typeService);
//         dispatch(typeServiceSuccess(res.data));
//     } catch (err) {
//         dispatch(typeServiceFailed(err.response.data.message));
//         toast.error(err.response.data.message);
//     }
// }