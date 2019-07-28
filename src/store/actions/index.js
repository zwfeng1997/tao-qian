export default {
  CartListNumReduce (ctx, value) {
    ctx.commit('CartListNumReduce', value)
  },
  CartListNumAdd (ctx,value) {
    ctx.commit('CartListNumAdd', value)
  },
  CartListSelected (ctx,value) {
    ctx.commit('CartListSelected', value)
  },
  CartListAllElectionsTure (ctx, index) {
    ctx.commit('CartListAllElectionsTure', index)
  },
  CartListAllElectionsFlase (ctx, index) {
    ctx.commit('CartListAllElectionsFlase', index)
  }
}
