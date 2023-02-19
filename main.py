from torchvision import datasets, transforms
import h5py
import scipy.io as io
import scipy.spatial
import PIL.Image as Image
import numpy as np
import os
import glob
from matplotlib import pyplot as plt
from scipy.ndimage.filters import gaussian_filter
import scipy
import json
from matplotlib import cm as CM
from image import *
from model import CSRNet
import torch
import os
%matplotlib inline


FRAMES_DROPPED = 5
WIDTH = 1920
HEIGHT = 1080
DPI = 100

transform = transforms.Compose([
    transforms.ToTensor(), transforms.Normalize(mean=[0.485, 0.456, 0.406],
                                                std=[0.229, 0.224, 0.225]),
])

model = CSRNet()

model = model.cuda()

checkpoint = torch.load(
    '/content/drive/MyDrive/TreeHacks/partBmodel_best.pth.tar')


model.load_state_dict(checkpoint['state_dict'])


cap = cv2.VideoCapture('/content/drive/MyDrive/TreeHacks/crowd_surge.mp4')

writer = cv2.VideoWriter('../crowd_surge_heat_map.mp4',
                         cv2.VideoWriter_fourcc(*"DIVX"), 10, (WIDTH, HEIGHT))

# heatmap_writer =
frame_num = 0
frames = []
fig = plt.figure(figsize=(WIDTH/DPI, HEIGHT/DPI), dpi=DPI)
index = 0
# key: frame #, value: rectangles for that frame
frame_boxes = {}
while (cap.isOpened()):
    ret, frame = cap.read()
    frame_num += 1
    if (frame_num % FRAMES_DROPPED != 0):
        continue
    if ret == False:
        break

    frame = cv2.resize(frame, (WIDTH, HEIGHT), fx=0, fy=0,
                       interpolation=cv2.INTER_CUBIC)
    # display(frame)

    img_from_opencv = Image.fromarray(cv2.cvtColor(frame, cv2.COLOR_BGR2RGB))
    # display(img_from_opencv)
    # heatmap_w_boxes_frame = find_actual_boxes(generate_heatmap)
    # frame = cv2.resize(frame, (WIDTH, HEIGHT), fx = 0, fy = 0,
    #                      interpolation = cv2.INTER_CUBIC)
    # img_from_opencv = Image.fromarray(cv2.cvtColor(frame, cv2.COLOR_BGR2RGB))
    plt_img = generate_heatmap(img_from_opencv, index)
    # print(plt_img.gcf().get_size_inches()*plt_img.gcf().dpi)
    # print(plt_img)
    # plt_img.show()
    # plt_img = Image.fromarray(cv2.cvtColor(plt_img, cv2.COLOR_BGR2RGB))

    plt_img = cv2.imread("../temp.png")
    index += 1
    frame = cv2.resize(plt_img, (WIDTH, HEIGHT), fx=0,
                       fy=0, interpolation=cv2.INTER_CUBIC)
    print(frame.shape)

    writer.write(frame)

    # convert plt to image for boxes
    # img_converted = convert_plt_to_img(plt_img)
    # cv2_imshow(plt_img)
    # img_converted = cv2.cvtColor(np.asarray(fig.canvas.buffer_rgba()), cv2.COLOR_RGBA2BGR)

    heatmap_w_boxes_frame = find_actual_boxes("../temp.png")
    frame_boxes[frame_num] = heatmap_w_boxes_frame

    # cv2_imshow(heatmap_w_boxes_frame)
    # frames.append([plt_img])

    # frames.append([plt_img])
    # writer.write(heatmap_w_boxes_frame)
    # break
# fig.tight_layout()
with open("frames.json", "w") as outfile:
    json.dump(frame_boxes, outfile)
# ani = animation.ArtistAnimation(fig, frames, interval=50, blit=True,
#                                 repeat_delay=1000)
# ani.save('../heatmap_video_boxes.mp4')

# release the video capture object
cap.release()
writer.release()
