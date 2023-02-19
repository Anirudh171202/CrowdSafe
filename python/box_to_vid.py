cap = cv2.VideoCapture('INPUT_VIDEO')

frame_no = 0
json_file = None

videoWriter = cv2.VideoWriter(
    'OUTPUT_VIDEO', cv2.VideoWriter_fourcc(*"DIVX"), 10, (WIDTH, HEIGHT))
with open('averaging_data_new.json') as user_file:
    json_file = json.load(user_file)


while (cap.isOpened()):
    ret, frame = cap.read()
    frame_no += 1
    if (frame_no % FRAMES_DROPPED != 0):
        continue
    if ret == False:
        break
    frame = cv2.resize(frame, (WIDTH, HEIGHT), fx=0, fy=0,
                       interpolation=cv2.INTER_CUBIC)

    for l in json_file[str(frame_no)]:
        x, y, w, h = l
        cv2.rectangle(frame, (x, y), (x + w, y + h), (36, 255, 12), 2)
    # cv2_imshow(frame)
    videoWriter.write(frame)


videoWriter.release()
