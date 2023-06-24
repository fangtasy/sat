import request from './base';

const apiList = {
  getSatIndexes: '/get_tagNames',
  getAllSats: '/get_sate_info'
}

export default {
  getSatIndexes: (params) => request.get(apiList.getSatIndexes, params),
}