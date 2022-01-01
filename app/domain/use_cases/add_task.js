export default function makeAddTask (taskEntity, taskDatabase) {

  return async function addTask (TaskInfo) {
    const task = taskEntity(TaskInfo)
    const exists = await taskDatabase.findById({ hash: task.getId() })
    if (exists) {
      return exists
    }

    const moderated = await handleModeration({ comment })
    const commentSource = moderated.getSource()
    return commentsDb.insert({
      author: moderated.getAuthor(),
      createdOn: moderated.getCreatedOn(),
      hash: moderated.getHash(),
      id: moderated.getId(),
      modifiedOn: moderated.getModifiedOn(),
      postId: moderated.getPostId(),
      published: moderated.isPublished(),
      replyToId: moderated.getReplyToId(),
      source: {
        ip: commentSource.getIp(),
        browser: commentSource.getBrowser(),
        referrer: commentSource.getReferrer()
      },
      text: moderated.getText()
    })
  }
  
}
