const { db } = global.Hydro.service; // 数据库连接
const coll = db.collection('paste');

async function add(userId, username, title, content, isprivate) {
    const pasteId = String.random(32); // Hydro提供了此方法，创建一个长度为32的随机字符串
    // 使用 mongodb 为数据库驱动，相关操作参照其文档
    var d = new Date(),	str = '';
	str += d.getFullYear() + '/'; //获取当前年份 
	str += d.getMonth() + 1 + '/'; //获取当前月份（0——11） 
	str += d.getDate() + ' ';
	str += d.getHours() + ':';
	str += d.getMinutes() + ':';
	str += d.getSeconds();
    const result = await coll.insertOne({
        _id: pasteId,
        title,
        owner: userId,
        user: username,
        time: str,
        content,
        isprivate,
    });
    return result.insertedId; // 返回插入的文档ID
}

async function edit(pasteID, userId, title, content, isprivate) {
    await coll.updateOne({
            _id: pasteID,
        },
        {
            $set:{
                "title": title,
                "owner": userId,
                "content": content,
                "isprivate": isprivate,
            }
        }
    );
}

async function get(pasteId) {
    return await coll.findOne({ _id: pasteId });
}

async function getUserPaste(userId) {
    return await coll.find({ "owner": Number.parseInt(userId) }).toArray();
}


async function del(_Id) {
    return await coll.deleteOne({ _id: _Id });
}

global.Hydro.model.pastebin = module.exports = { add, get, getUserPaste, del, edit };
