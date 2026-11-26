window.BLOG_DATA = {
  "generated_at": "2026-11-26",
  "rd_fixed136": {
    "panel": "fixed136 sampler: 136 strata, 544 cells, 17,408 draws, 793/1,905 validation records",
    "joint_valid_scalars": 6929996,
    "rows": [
      {
        "method": "FAST+ fixed BPE scale 2 (non-official rate variant)",
        "family": "fast_plus",
        "mb": 0.347,
        "tok_per_win": 14.2,
        "joint_mae": 0.1184,
        "joint_max": 1.85,
        "joint_p99": 0.621
      },
      {
        "method": "FAST+ fixed BPE scale 5 (non-official rate variant)",
        "family": "fast_plus",
        "mb": 0.549,
        "tok_per_win": 22.6,
        "joint_mae": 0.0599,
        "joint_max": 1.032,
        "joint_p99": 0.318
      },
      {
        "method": "Holo own10000 p1",
        "family": "holo",
        "mb": 0.693,
        "tok_per_win": 32,
        "joint_mae": 0.0522,
        "joint_max": 6.928,
        "joint_p99": 0.314
      },
      {
        "method": "FAST+ fixed BPE scale 10 (official)",
        "family": "fast_plus",
        "mb": 0.767,
        "tok_per_win": 31.7,
        "joint_mae": 0.0351,
        "joint_max": 0.657,
        "joint_p99": 0.183
      },
      {
        "method": "FAST+ fixed BPE scale 20 (non-official rate variant)",
        "family": "fast_plus",
        "mb": 1.056,
        "tok_per_win": 43.8,
        "joint_mae": 0.0204,
        "joint_max": 0.389,
        "joint_p99": 0.105
      },
      {
        "method": "Holo own10000 p2",
        "family": "holo",
        "mb": 1.386,
        "tok_per_win": 64,
        "joint_mae": 0.0264,
        "joint_max": 7.042,
        "joint_p99": 0.195
      },
      {
        "method": "FAST+ fixed BPE scale 40 (non-official rate variant)",
        "family": "fast_plus",
        "mb": 1.479,
        "tok_per_win": 61.5,
        "joint_mae": 0.0119,
        "joint_max": 0.231,
        "joint_p99": 0.061
      },
      {
        "method": "Bin4 declared bounds",
        "family": "bin",
        "mb": 2.01,
        "tok_per_win": null,
        "joint_mae": 1.3848,
        "joint_max": 3.333,
        "joint_p99": null
      },
      {
        "method": "Holo own10000 p3",
        "family": "holo",
        "mb": 2.08,
        "tok_per_win": 96,
        "joint_mae": 0.0248,
        "joint_max": 7.014,
        "joint_p99": 0.191
      },
      {
        "method": "Bin8 declared bounds",
        "family": "bin",
        "mb": 3.015,
        "tok_per_win": null,
        "joint_mae": 0.4894,
        "joint_max": 1.429,
        "joint_p99": null
      },
      {
        "method": "Bin16 declared bounds",
        "family": "bin",
        "mb": 4.02,
        "tok_per_win": null,
        "joint_mae": 0.2219,
        "joint_max": 0.667,
        "joint_p99": null
      },
      {
        "method": "Bin32 declared bounds",
        "family": "bin",
        "mb": 5.024,
        "tok_per_win": null,
        "joint_mae": 0.11,
        "joint_max": 0.323,
        "joint_p99": null
      },
      {
        "method": "Bin64 declared bounds",
        "family": "bin",
        "mb": 6.029,
        "tok_per_win": null,
        "joint_mae": 0.053,
        "joint_max": 0.159,
        "joint_p99": null
      },
      {
        "method": "Bin128 declared bounds",
        "family": "bin",
        "mb": 7.034,
        "tok_per_win": null,
        "joint_mae": 0.0263,
        "joint_max": 0.079,
        "joint_p99": null
      },
      {
        "method": "Bin256 declared bounds",
        "family": "bin",
        "mb": 8.039,
        "tok_per_win": null,
        "joint_mae": 0.0131,
        "joint_max": 0.039,
        "joint_p99": null
      }
    ],
    "lofo_degradation": [
      {
        "robot": "Franka (in-dist)",
        "mae_seen": 0.049,
        "mae_heldout": 0.049,
        "ratio": 1.0
      },
      {
        "robot": "UR5e",
        "mae_seen": 0.052,
        "mae_heldout": 0.114,
        "ratio": 2.2
      },
      {
        "robot": "IIWA",
        "mae_seen": 0.051,
        "mae_heldout": 0.184,
        "ratio": 3.6
      },
      {
        "robot": "AgileX / Bi-Arm",
        "mae_seen": 0.056,
        "mae_heldout": 0.308,
        "ratio": 5.5
      },
      {
        "robot": "Unitree G1 (29-DoF)",
        "mae_seen": 0.064,
        "mae_heldout": 0.544,
        "ratio": 8.5
      }
    ]
  },
  "x1_unseen": {
    "n_demos_total": 400,
    "arms": {
      "franka": {
        "raw": {
          "total_400": 350,
          "non_drawer_250": 232,
          "clean_drawer_100": 83,
          "all_drawer_150": 118,
          "libero_spatial": 97,
          "libero_object": 90,
          "libero_goal": 83,
          "libero_10": 80
        },
        "ach": {
          "total_400": 199,
          "non_drawer_250": 180,
          "clean_drawer_100": 1,
          "all_drawer_150": 19,
          "libero_spatial": 83,
          "libero_object": 74,
          "libero_goal": 1,
          "libero_10": 41
        },
        "c1": {
          "total_400": 206,
          "non_drawer_250": 186,
          "clean_drawer_100": 0,
          "all_drawer_150": 20,
          "libero_spatial": 85,
          "libero_object": 78,
          "libero_goal": 0,
          "libero_10": 43
        },
        "ach_d3": {
          "total_400": 268,
          "non_drawer_250": 231,
          "clean_drawer_100": 14,
          "all_drawer_150": 37,
          "libero_spatial": 96,
          "libero_object": 90,
          "libero_goal": 14,
          "libero_10": 68
        },
        "c1_d3": {
          "total_400": 247,
          "non_drawer_250": 224,
          "clean_drawer_100": 4,
          "all_drawer_150": 23,
          "libero_spatial": 95,
          "libero_object": 88,
          "libero_goal": 4,
          "libero_10": 60
        },
        "ach_d35": {
          "total_400": 259,
          "non_drawer_250": 231,
          "clean_drawer_100": 14,
          "all_drawer_150": 28,
          "libero_spatial": 96,
          "libero_object": 90,
          "libero_goal": 14,
          "libero_10": 59
        },
        "c1_d35": {
          "total_400": 250,
          "non_drawer_250": 224,
          "clean_drawer_100": 4,
          "all_drawer_150": 26,
          "libero_spatial": 95,
          "libero_object": 88,
          "libero_goal": 4,
          "libero_10": 63
        },
        "ach_d4": {
          "total_400": 205,
          "non_drawer_250": 192,
          "clean_drawer_100": 1,
          "all_drawer_150": 13,
          "libero_spatial": 86,
          "libero_object": 82,
          "libero_goal": 1,
          "libero_10": 36
        },
        "c1_d4": {
          "total_400": 181,
          "non_drawer_250": 164,
          "clean_drawer_100": 0,
          "all_drawer_150": 17,
          "libero_spatial": 67,
          "libero_object": 77,
          "libero_goal": 0,
          "libero_10": 37
        }
      },
      "ur5e": {
        "raw": {
          "total_400": 268,
          "non_drawer_250": 216,
          "clean_drawer_100": 44,
          "all_drawer_150": 52,
          "libero_spatial": 91,
          "libero_object": 86,
          "libero_goal": 44,
          "libero_10": 47
        },
        "ach": {
          "total_400": 193,
          "non_drawer_250": 178,
          "clean_drawer_100": 6,
          "all_drawer_150": 15,
          "libero_spatial": 82,
          "libero_object": 72,
          "libero_goal": 6,
          "libero_10": 33
        },
        "c1": {
          "total_400": 205,
          "non_drawer_250": 187,
          "clean_drawer_100": 5,
          "all_drawer_150": 18,
          "libero_spatial": 85,
          "libero_object": 78,
          "libero_goal": 5,
          "libero_10": 37
        },
        "ach_d3": {
          "total_400": 247,
          "non_drawer_250": 233,
          "clean_drawer_100": 6,
          "all_drawer_150": 14,
          "libero_spatial": 97,
          "libero_object": 91,
          "libero_goal": 6,
          "libero_10": 53
        },
        "c1_d3": {
          "total_400": 246,
          "non_drawer_250": 225,
          "clean_drawer_100": 5,
          "all_drawer_150": 21,
          "libero_spatial": 96,
          "libero_object": 85,
          "libero_goal": 5,
          "libero_10": 60
        },
        "ach_d35": {
          "total_400": 249,
          "non_drawer_250": 233,
          "clean_drawer_100": 6,
          "all_drawer_150": 16,
          "libero_spatial": 97,
          "libero_object": 91,
          "libero_goal": 6,
          "libero_10": 55
        },
        "c1_d35": {
          "total_400": 242,
          "non_drawer_250": 225,
          "clean_drawer_100": 5,
          "all_drawer_150": 17,
          "libero_spatial": 96,
          "libero_object": 85,
          "libero_goal": 5,
          "libero_10": 56
        },
        "ach_d4": {
          "total_400": 207,
          "non_drawer_250": 198,
          "clean_drawer_100": 0,
          "all_drawer_150": 9,
          "libero_spatial": 86,
          "libero_object": 81,
          "libero_goal": 0,
          "libero_10": 40
        },
        "c1_d4": {
          "total_400": 200,
          "non_drawer_250": 188,
          "clean_drawer_100": 0,
          "all_drawer_150": 12,
          "libero_spatial": 85,
          "libero_object": 74,
          "libero_goal": 0,
          "libero_10": 41
        }
      },
      "iiwa": {
        "raw": {
          "total_400": 166,
          "non_drawer_250": 81,
          "clean_drawer_100": 50,
          "all_drawer_150": 85,
          "libero_spatial": 19,
          "libero_object": 41,
          "libero_goal": 50,
          "libero_10": 56
        },
        "ach": {
          "total_400": 201,
          "non_drawer_250": 184,
          "clean_drawer_100": 1,
          "all_drawer_150": 17,
          "libero_spatial": 83,
          "libero_object": 76,
          "libero_goal": 1,
          "libero_10": 41
        },
        "c1": {
          "total_400": 209,
          "non_drawer_250": 188,
          "clean_drawer_100": 0,
          "all_drawer_150": 21,
          "libero_spatial": 88,
          "libero_object": 76,
          "libero_goal": 0,
          "libero_10": 45
        },
        "ach_d3": {
          "total_400": 263,
          "non_drawer_250": 230,
          "clean_drawer_100": 14,
          "all_drawer_150": 33,
          "libero_spatial": 97,
          "libero_object": 89,
          "libero_goal": 14,
          "libero_10": 63
        },
        "c1_d3": {
          "total_400": 253,
          "non_drawer_250": 227,
          "clean_drawer_100": 0,
          "all_drawer_150": 26,
          "libero_spatial": 97,
          "libero_object": 87,
          "libero_goal": 0,
          "libero_10": 69
        },
        "ach_d35": {
          "total_400": 266,
          "non_drawer_250": 230,
          "clean_drawer_100": 14,
          "all_drawer_150": 36,
          "libero_spatial": 97,
          "libero_object": 89,
          "libero_goal": 14,
          "libero_10": 66
        },
        "c1_d35": {
          "total_400": 254,
          "non_drawer_250": 227,
          "clean_drawer_100": 0,
          "all_drawer_150": 27,
          "libero_spatial": 97,
          "libero_object": 87,
          "libero_goal": 0,
          "libero_10": 70
        },
        "ach_d4": {
          "total_400": 211,
          "non_drawer_250": 192,
          "clean_drawer_100": 2,
          "all_drawer_150": 19,
          "libero_spatial": 82,
          "libero_object": 80,
          "libero_goal": 2,
          "libero_10": 47
        },
        "c1_d4": {
          "total_400": 204,
          "non_drawer_250": 184,
          "clean_drawer_100": 0,
          "all_drawer_150": 20,
          "libero_spatial": 84,
          "libero_object": 77,
          "libero_goal": 0,
          "libero_10": 43
        }
      },
      "kinova3": {
        "raw": {
          "total_400": 278,
          "non_drawer_250": 192,
          "clean_drawer_100": 51,
          "all_drawer_150": 86,
          "libero_spatial": 71,
          "libero_object": 89,
          "libero_goal": 51,
          "libero_10": 67
        },
        "ach": {
          "total_400": 123,
          "non_drawer_250": 116,
          "clean_drawer_100": 0,
          "all_drawer_150": 7,
          "libero_spatial": 36,
          "libero_object": 65,
          "libero_goal": 0,
          "libero_10": 22
        },
        "c1": {
          "total_400": 134,
          "non_drawer_250": 126,
          "clean_drawer_100": 1,
          "all_drawer_150": 8,
          "libero_spatial": 41,
          "libero_object": 66,
          "libero_goal": 1,
          "libero_10": 26
        },
        "ach_d3": {
          "total_400": 149,
          "non_drawer_250": 134,
          "clean_drawer_100": 8,
          "all_drawer_150": 15,
          "libero_spatial": 40,
          "libero_object": 76,
          "libero_goal": 8,
          "libero_10": 25
        },
        "c1_d3": {
          "total_400": 141,
          "non_drawer_250": 128,
          "clean_drawer_100": 10,
          "all_drawer_150": 13,
          "libero_spatial": 39,
          "libero_object": 73,
          "libero_goal": 10,
          "libero_10": 19
        },
        "ach_d35": {
          "total_400": 197,
          "non_drawer_250": 169,
          "clean_drawer_100": 8,
          "all_drawer_150": 28,
          "libero_spatial": 52,
          "libero_object": 84,
          "libero_goal": 8,
          "libero_10": 53
        },
        "c1_d35": {
          "total_400": 171,
          "non_drawer_250": 148,
          "clean_drawer_100": 12,
          "all_drawer_150": 23,
          "libero_spatial": 44,
          "libero_object": 76,
          "libero_goal": 12,
          "libero_10": 39
        },
        "ach_d4": {
          "total_400": 163,
          "non_drawer_250": 139,
          "clean_drawer_100": 2,
          "all_drawer_150": 24,
          "libero_spatial": 52,
          "libero_object": 65,
          "libero_goal": 2,
          "libero_10": 44
        },
        "c1_d4": {
          "total_400": 129,
          "non_drawer_250": 117,
          "clean_drawer_100": 1,
          "all_drawer_150": 12,
          "libero_spatial": 41,
          "libero_object": 57,
          "libero_goal": 1,
          "libero_10": 30
        }
      },
      "sawyer": {
        "raw": {
          "total_400": 76,
          "non_drawer_250": 71,
          "clean_drawer_100": 5,
          "all_drawer_150": 5,
          "libero_spatial": 4,
          "libero_object": 66,
          "libero_goal": 5,
          "libero_10": 1
        },
        "ach": {
          "total_400": 71,
          "non_drawer_250": 71,
          "clean_drawer_100": 0,
          "all_drawer_150": 0,
          "libero_spatial": 0,
          "libero_object": 71,
          "libero_goal": 0,
          "libero_10": 0
        },
        "c1": {
          "total_400": 77,
          "non_drawer_250": 77,
          "clean_drawer_100": 0,
          "all_drawer_150": 0,
          "libero_spatial": 0,
          "libero_object": 77,
          "libero_goal": 0,
          "libero_10": 0
        },
        "ach_d3": {
          "total_400": 91,
          "non_drawer_250": 91,
          "clean_drawer_100": 0,
          "all_drawer_150": 0,
          "libero_spatial": 0,
          "libero_object": 91,
          "libero_goal": 0,
          "libero_10": 0
        },
        "c1_d3": {
          "total_400": 85,
          "non_drawer_250": 85,
          "clean_drawer_100": 0,
          "all_drawer_150": 0,
          "libero_spatial": 0,
          "libero_object": 85,
          "libero_goal": 0,
          "libero_10": 0
        },
        "ach_d35": {
          "total_400": 91,
          "non_drawer_250": 91,
          "clean_drawer_100": 0,
          "all_drawer_150": 0,
          "libero_spatial": 0,
          "libero_object": 91,
          "libero_goal": 0,
          "libero_10": 0
        },
        "c1_d35": {
          "total_400": 85,
          "non_drawer_250": 85,
          "clean_drawer_100": 0,
          "all_drawer_150": 0,
          "libero_spatial": 0,
          "libero_object": 85,
          "libero_goal": 0,
          "libero_10": 0
        },
        "ach_d4": {
          "total_400": 98,
          "non_drawer_250": 96,
          "clean_drawer_100": 2,
          "all_drawer_150": 2,
          "libero_spatial": 14,
          "libero_object": 80,
          "libero_goal": 2,
          "libero_10": 2
        },
        "c1_d4": {
          "total_400": 93,
          "non_drawer_250": 91,
          "clean_drawer_100": 1,
          "all_drawer_150": 2,
          "libero_spatial": 16,
          "libero_object": 73,
          "libero_goal": 1,
          "libero_10": 3
        }
      }
    },
    "franka_smoking_gun": {
      "non_drawer_raw": 232,
      "non_drawer_ach_d3": 231,
      "clean_drawer_raw": 83,
      "clean_drawer_ach_d3": 14,
      "all_drawer_raw": 118,
      "all_drawer_ach_d3": 37,
      "lost_drawer_median_err_mm": 0.29,
      "kept_drawer_median_err_mm": 0.32,
      "goal_lost_median_err_mm": 0.26,
      "goal_kept_median_err_mm": 0.54,
      "kinova3_ik_cannot_of_lost": [
        130,
        151
      ]
    }
  },
  "census_e1": {
    "windows": 220982,
    "tokens_total": 10421905,
    "tokens_per_window_mean": 47.16,
    "share_frame_0": 2.12,
    "share_frames_1_16": 47.69,
    "share_frames_17_32": 50.19,
    "entropy_by_pos": [
      {
        "k": 0,
        "h_unigram": 2.795,
        "h_cond_prev": 2.744,
        "h_plugin_prev": 2.742
      },
      {
        "k": 1,
        "h_unigram": 11.067,
        "h_cond_prev": 10.602,
        "h_plugin_prev": 9.953
      },
      {
        "k": 2,
        "h_unigram": 10.784,
        "h_cond_prev": 9.64,
        "h_plugin_prev": 5.369
      },
      {
        "k": 3,
        "h_unigram": 11.033,
        "h_cond_prev": 10.294,
        "h_plugin_prev": 5.947
      },
      {
        "k": 4,
        "h_unigram": 10.893,
        "h_cond_prev": 10.268,
        "h_plugin_prev": 5.803
      },
      {
        "k": 5,
        "h_unigram": 11.019,
        "h_cond_prev": 10.369,
        "h_plugin_prev": 5.969
      },
      {
        "k": 6,
        "h_unigram": 10.964,
        "h_cond_prev": 10.355,
        "h_plugin_prev": 5.886
      },
      {
        "k": 7,
        "h_unigram": 11.008,
        "h_cond_prev": 10.42,
        "h_plugin_prev": 5.959
      },
      {
        "k": 8,
        "h_unigram": 10.99,
        "h_cond_prev": 10.419,
        "h_plugin_prev": 5.932
      },
      {
        "k": 9,
        "h_unigram": 10.991,
        "h_cond_prev": 10.446,
        "h_plugin_prev": 5.957
      },
      {
        "k": 10,
        "h_unigram": 10.984,
        "h_cond_prev": 10.456,
        "h_plugin_prev": 5.96
      },
      {
        "k": 11,
        "h_unigram": 10.978,
        "h_cond_prev": 10.464,
        "h_plugin_prev": 5.975
      },
      {
        "k": 12,
        "h_unigram": 10.975,
        "h_cond_prev": 10.488,
        "h_plugin_prev": 5.989
      },
      {
        "k": 13,
        "h_unigram": 10.979,
        "h_cond_prev": 10.516,
        "h_plugin_prev": 6.007
      },
      {
        "k": 14,
        "h_unigram": 10.966,
        "h_cond_prev": 10.51,
        "h_plugin_prev": 6.001
      },
      {
        "k": 15,
        "h_unigram": 10.966,
        "h_cond_prev": 10.529,
        "h_plugin_prev": 6.014
      },
      {
        "k": 16,
        "h_unigram": 10.96,
        "h_cond_prev": 10.53,
        "h_plugin_prev": 6.023
      },
      {
        "k": 17,
        "h_unigram": 10.963,
        "h_cond_prev": 10.56,
        "h_plugin_prev": 6.034
      },
      {
        "k": 18,
        "h_unigram": 10.95,
        "h_cond_prev": 10.556,
        "h_plugin_prev": 6.034
      },
      {
        "k": 19,
        "h_unigram": 10.96,
        "h_cond_prev": 10.571,
        "h_plugin_prev": 6.048
      },
      {
        "k": 20,
        "h_unigram": 10.946,
        "h_cond_prev": 10.584,
        "h_plugin_prev": 6.047
      },
      {
        "k": 21,
        "h_unigram": 10.949,
        "h_cond_prev": 10.581,
        "h_plugin_prev": 6.058
      },
      {
        "k": 22,
        "h_unigram": 10.941,
        "h_cond_prev": 10.591,
        "h_plugin_prev": 6.06
      },
      {
        "k": 23,
        "h_unigram": 10.938,
        "h_cond_prev": 10.577,
        "h_plugin_prev": 6.065
      },
      {
        "k": 24,
        "h_unigram": 10.931,
        "h_cond_prev": 10.588,
        "h_plugin_prev": 6.066
      },
      {
        "k": 25,
        "h_unigram": 10.931,
        "h_cond_prev": 10.6,
        "h_plugin_prev": 6.077
      },
      {
        "k": 26,
        "h_unigram": 10.924,
        "h_cond_prev": 10.605,
        "h_plugin_prev": 6.071
      },
      {
        "k": 27,
        "h_unigram": 10.915,
        "h_cond_prev": 10.602,
        "h_plugin_prev": 6.069
      },
      {
        "k": 28,
        "h_unigram": 10.907,
        "h_cond_prev": 10.591,
        "h_plugin_prev": 6.063
      },
      {
        "k": 29,
        "h_unigram": 10.895,
        "h_cond_prev": 10.591,
        "h_plugin_prev": 6.055
      },
      {
        "k": 30,
        "h_unigram": 10.875,
        "h_cond_prev": 10.586,
        "h_plugin_prev": 6.048
      },
      {
        "k": 31,
        "h_unigram": 10.863,
        "h_cond_prev": 10.574,
        "h_plugin_prev": 6.037
      },
      {
        "k": 32,
        "h_unigram": 10.853,
        "h_cond_prev": 10.579,
        "h_plugin_prev": 6.024
      },
      {
        "k": 33,
        "h_unigram": 10.833,
        "h_cond_prev": 10.577,
        "h_plugin_prev": 5.995
      },
      {
        "k": 34,
        "h_unigram": 10.804,
        "h_cond_prev": 10.555,
        "h_plugin_prev": 5.962
      },
      {
        "k": 35,
        "h_unigram": 10.777,
        "h_cond_prev": 10.539,
        "h_plugin_prev": 5.934
      },
      {
        "k": 36,
        "h_unigram": 10.742,
        "h_cond_prev": 10.519,
        "h_plugin_prev": 5.897
      },
      {
        "k": 37,
        "h_unigram": 10.721,
        "h_cond_prev": 10.513,
        "h_plugin_prev": 5.865
      },
      {
        "k": 38,
        "h_unigram": 10.694,
        "h_cond_prev": 10.495,
        "h_plugin_prev": 5.818
      },
      {
        "k": 39,
        "h_unigram": 10.659,
        "h_cond_prev": 10.477,
        "h_plugin_prev": 5.773
      }
    ]
  },
  "dev_leaderboard": {
    "cover_eef_lib": {
      "label": "Cover (EEF)",
      "track": "EEF (relative)",
      "horizon": "32 / exec 16",
      "tok_per_win": 44.1,
      "libero_spatial": 0.716,
      "libero_object": 0.936,
      "libero_goal": 0.656,
      "libero_10": 0.648,
      "mean": 0.739,
      "source": "Qwen3-VL-2B 30k, dev-half (1,000 ep)"
    },
    "cover_h32_joint": {
      "label": "Cover (Joint h32)",
      "track": "Joint (kp=600)",
      "horizon": "32 / exec 16",
      "tok_per_win": 28.4,
      "libero_spatial": 0.244,
      "libero_object": 0.212,
      "libero_goal": 0.28,
      "libero_10": 0.036,
      "mean": 0.193,
      "source": "Qwen3-VL-2B 30k, dev-half (1,000 ep)"
    },
    "holo_joint": {
      "label": "Holo Graph-FSQ",
      "track": "Joint (kp=600)",
      "horizon": "64 / exec 32",
      "tok_per_win": 32.0,
      "libero_spatial": 0.068,
      "libero_object": 0.12,
      "libero_goal": 0.056,
      "libero_10": 0.028,
      "mean": 0.068,
      "source": "Qwen3-VL-2B 30k, dev-half (1,000 ep)"
    },
    "fast_eef": {
      "label": "FAST (EEF)",
      "track": "EEF (relative)",
      "horizon": "32 / exec 16",
      "tok_per_win": 55.4,
      "n_suites": 3,
      "source": "Qwen3-VL-2B 30k, dev-half (Exp 2, 3/4 suites, eval_idx 0-9)",
      "libero_spatial": 0.86,
      "libero_goal": 0.75,
      "libero_10": 0.49,
      "mean": 0.7
    },
    "bin256_eef": {
      "label": "Bin256 (EEF)",
      "track": "EEF (relative)",
      "horizon": "32 / exec 16",
      "tok_per_win": 224.0,
      "n_suites": 4,
      "source": "Qwen3-VL-2B 30k, dev-half (Exp 2, 4/4 suites, eval_idx 0-9)",
      "libero_spatial": 0.15,
      "libero_object": 0.29,
      "libero_goal": 0.23,
      "libero_10": 0.01,
      "mean": 0.17
    },
    "oat_joint": {
      "label": "OAT (Joint)",
      "track": "Joint (kp=600)",
      "horizon": "32 / exec 16",
      "tok_per_win": 16.0,
      "n_suites": 4,
      "source": "Qwen3-VL-2B 30k, dev-half (Exp 2, 4/4 suites, eval_idx 0-9)",
      "libero_spatial": 0.78,
      "libero_object": 0.68,
      "libero_goal": 0.57,
      "libero_10": 0.39,
      "mean": 0.605
    }
  },
  "exp1": {
    "n_windows": 600,
    "codecs": {
      "Bin256": {
        "codec_name": "bin",
        "vocab_size": 1024,
        "tokens_per_window_mean": 224.0,
        "tokens_per_window_p95": 224.0,
        "recon_mse_e3": 0.0027,
        "recon_pos_mae_mm": 1.2,
        "recon_pos_p99_mm": 3.94,
        "recon_pos_max_mm": 5.55,
        "single_tok_dev_p50_mm": 0.0,
        "single_tok_dev_p90_mm": 33.09,
        "single_tok_dev_p99_mm": 61.77,
        "single_tok_fallback_rate": 0.0,
        "perturbation_by_position": [
          {
            "rel_pos": 0.0,
            "max_dev_p50_mm": 17.28,
            "max_dev_p90_mm": 47.06,
            "mean_dev_p50_mm": 17.28,
            "fallback_rate": 0.0
          },
          {
            "rel_pos": 0.15,
            "max_dev_p50_mm": 0.0,
            "max_dev_p90_mm": 0.0,
            "mean_dev_p50_mm": 0.0,
            "fallback_rate": 0.0
          },
          {
            "rel_pos": 0.35,
            "max_dev_p50_mm": 22.43,
            "max_dev_p90_mm": 50.48,
            "mean_dev_p50_mm": 14.72,
            "fallback_rate": 0.0
          },
          {
            "rel_pos": 0.55,
            "max_dev_p50_mm": 0.0,
            "max_dev_p90_mm": 0.0,
            "mean_dev_p50_mm": 0.0,
            "fallback_rate": 0.0
          },
          {
            "rel_pos": 0.75,
            "max_dev_p50_mm": 0.0,
            "max_dev_p90_mm": 0.0,
            "mean_dev_p50_mm": 0.0,
            "fallback_rate": 0.0
          },
          {
            "rel_pos": 0.9,
            "max_dev_p50_mm": 0.0,
            "max_dev_p90_mm": 0.0,
            "mean_dev_p50_mm": 0.0,
            "fallback_rate": 0.0
          }
        ],
        "prefix_recovery": null,
        "positional_entropy": [
          {
            "pos": 0,
            "n": 600,
            "h_marginal": 6.412,
            "h_cond": 6.412
          },
          {
            "pos": 1,
            "n": 600,
            "h_marginal": 6.174,
            "h_cond": 2.343
          },
          {
            "pos": 2,
            "n": 600,
            "h_marginal": 6.582,
            "h_cond": 2.527
          },
          {
            "pos": 3,
            "n": 600,
            "h_marginal": 4.389,
            "h_cond": 1.508
          },
          {
            "pos": 4,
            "n": 600,
            "h_marginal": 5.432,
            "h_cond": 3.365
          },
          {
            "pos": 5,
            "n": 600,
            "h_marginal": 4.631,
            "h_cond": 2.372
          },
          {
            "pos": 6,
            "n": 600,
            "h_marginal": 1.0,
            "h_cond": 0.775
          },
          {
            "pos": 7,
            "n": 600,
            "h_marginal": 6.692,
            "h_cond": 6.351
          },
          {
            "pos": 8,
            "n": 600,
            "h_marginal": 6.438,
            "h_cond": 2.255
          },
          {
            "pos": 9,
            "n": 600,
            "h_marginal": 6.637,
            "h_cond": 2.376
          },
          {
            "pos": 10,
            "n": 600,
            "h_marginal": 4.366,
            "h_cond": 1.659
          },
          {
            "pos": 11,
            "n": 600,
            "h_marginal": 5.44,
            "h_cond": 3.403
          },
          {
            "pos": 12,
            "n": 600,
            "h_marginal": 4.698,
            "h_cond": 2.405
          },
          {
            "pos": 13,
            "n": 600,
            "h_marginal": 1.0,
            "h_cond": 0.769
          },
          {
            "pos": 14,
            "n": 600,
            "h_marginal": 6.829,
            "h_cond": 6.458
          },
          {
            "pos": 15,
            "n": 600,
            "h_marginal": 6.566,
            "h_cond": 2.182
          },
          {
            "pos": 16,
            "n": 600,
            "h_marginal": 6.856,
            "h_cond": 2.405
          },
          {
            "pos": 17,
            "n": 600,
            "h_marginal": 4.402,
            "h_cond": 1.58
          },
          {
            "pos": 18,
            "n": 600,
            "h_marginal": 5.671,
            "h_cond": 3.577
          },
          {
            "pos": 19,
            "n": 600,
            "h_marginal": 4.715,
            "h_cond": 2.359
          },
          {
            "pos": 20,
            "n": 600,
            "h_marginal": 1.0,
            "h_cond": 0.763
          },
          {
            "pos": 21,
            "n": 600,
            "h_marginal": 6.979,
            "h_cond": 6.626
          },
          {
            "pos": 22,
            "n": 600,
            "h_marginal": 6.661,
            "h_cond": 2.027
          },
          {
            "pos": 23,
            "n": 600,
            "h_marginal": 6.822,
            "h_cond": 2.354
          },
          {
            "pos": 24,
            "n": 600,
            "h_marginal": 4.527,
            "h_cond": 1.708
          },
          {
            "pos": 25,
            "n": 600,
            "h_marginal": 5.685,
            "h_cond": 3.492
          },
          {
            "pos": 26,
            "n": 600,
            "h_marginal": 4.739,
            "h_cond": 2.328
          },
          {
            "pos": 27,
            "n": 600,
            "h_marginal": 0.999,
            "h_cond": 0.764
          },
          {
            "pos": 28,
            "n": 600,
            "h_marginal": 7.091,
            "h_cond": 6.659
          },
          {
            "pos": 29,
            "n": 600,
            "h_marginal": 6.675,
            "h_cond": 1.909
          },
          {
            "pos": 30,
            "n": 600,
            "h_marginal": 6.922,
            "h_cond": 2.352
          },
          {
            "pos": 31,
            "n": 600,
            "h_marginal": 4.634,
            "h_cond": 1.633
          },
          {
            "pos": 32,
            "n": 600,
            "h_marginal": 5.712,
            "h_cond": 3.466
          },
          {
            "pos": 33,
            "n": 600,
            "h_marginal": 4.744,
            "h_cond": 2.356
          },
          {
            "pos": 34,
            "n": 600,
            "h_marginal": 0.999,
            "h_cond": 0.778
          },
          {
            "pos": 35,
            "n": 600,
            "h_marginal": 7.041,
            "h_cond": 6.619
          },
          {
            "pos": 36,
            "n": 600,
            "h_marginal": 6.662,
            "h_cond": 1.963
          },
          {
            "pos": 37,
            "n": 600,
            "h_marginal": 6.87,
            "h_cond": 2.387
          },
          {
            "pos": 38,
            "n": 600,
            "h_marginal": 4.737,
            "h_cond": 1.739
          },
          {
            "pos": 39,
            "n": 600,
            "h_marginal": 5.722,
            "h_cond": 3.475
          },
          {
            "pos": 40,
            "n": 600,
            "h_marginal": 4.699,
            "h_cond": 2.325
          },
          {
            "pos": 41,
            "n": 600,
            "h_marginal": 0.998,
            "h_cond": 0.729
          },
          {
            "pos": 42,
            "n": 600,
            "h_marginal": 6.897,
            "h_cond": 6.489
          },
          {
            "pos": 43,
            "n": 600,
            "h_marginal": 6.799,
            "h_cond": 2.119
          },
          {
            "pos": 44,
            "n": 600,
            "h_marginal": 6.799,
            "h_cond": 2.194
          },
          {
            "pos": 45,
            "n": 600,
            "h_marginal": 4.729,
            "h_cond": 1.759
          },
          {
            "pos": 46,
            "n": 600,
            "h_marginal": 5.555,
            "h_cond": 3.374
          },
          {
            "pos": 47,
            "n": 600,
            "h_marginal": 4.709,
            "h_cond": 2.43
          }
        ],
        "prc_at_32": 0.2672,
        "hero": {
          "clean_xyz_mm": [
            [
              -8.270000457763672,
              -0.18000000715255737,
              -46.880001068115234
            ],
            [
              -17.280000686645508,
              -0.3700000047683716,
              -93.75
            ],
            [
              -26.290000915527344,
              3.859999895095825,
              -140.6199951171875
            ],
            [
              -33.459999084472656,
              15.069999694824219,
              -181.6199951171875
            ],
            [
              -35.849998474121094,
              29.229999542236328,
              -217.4600067138672
            ],
            [
              -36.029998779296875,
              41.540000915527344,
              -248.52999877929688
            ],
            [
              -36.209999084472656,
              50.54999923706055,
              -277.0199890136719
            ],
            [
              -36.400001525878906,
              56.9900016784668,
              -302.94000244140625
            ],
            [
              -36.58000183105469,
              61.58000183105469,
              -325.54998779296875
            ],
            [
              -36.7599983215332,
              66.18000030517578,
              -345.2200012207031
            ],
            [
              -36.95000076293945,
              70.4000015258789,
              -360.1099853515625
            ],
            [
              -37.130001068115234,
              74.62999725341797,
              -370.2200012207031
            ],
            [
              -37.31999969482422,
              77.38999938964844,
              -375.9200134277344
            ],
            [
              -37.5,
              78.30999755859375,
              -377.57000732421875
            ],
            [
              -37.68000030517578,
              78.12000274658203,
              -377.760009765625
            ],
            [
              -37.869998931884766,
              77.94000244140625,
              -376.8399963378906
            ],
            [
              -38.04999923706055,
              77.76000213623047,
              -372.239990234375
            ],
            [
              -38.2400016784668,
              77.20999908447266,
              -363.9700012207031
            ],
            [
              -38.41999816894531,
              77.0199966430664,
              -354.2300109863281
            ],
            [
              -38.599998474121094,
              76.83999633789062,
              -343.3800048828125
            ],
            [
              -38.790000915527344,
              76.6500015258789,
              -334.010009765625
            ],
            [
              -38.970001220703125,
              76.47000122070312,
              -326.1000061035156
            ],
            [
              -39.150001525878906,
              76.29000091552734,
              -318.20001220703125
            ],
            [
              -39.34000015258789,
              76.0999984741211,
              -307.3500061035156
            ],
            [
              -39.52000045776367,
              77.38999938964844,
              -288.7900085449219
            ],
            [
              -39.709999084472656,
              81.98999786376953,
              -261.3999938964844
            ],
            [
              -39.88999938964844,
              88.41999816894531,
              -228.49000549316406
            ],
            [
              -34.189998626708984,
              96.69000244140625,
              -186.75999450683594
            ],
            [
              -18.56999969482422,
              105.33000183105469,
              -142.4600067138672
            ],
            [
              5.880000114440918,
              107.72000122070312,
              -95.58999633789062
            ],
            [
              38.41999816894531,
              107.54000091552734,
              -50.54999923706055
            ],
            [
              75.73999786376953,
              99.26000213623047,
              -15.4399995803833
            ]
          ],
          "n_tokens": 224,
          "perturbed": {
            "early": {
              "token_pos": 22,
              "n_tokens": 224,
              "max_dev_mm": 13.97,
              "xyz_mm": [
                [
                  -8.270000457763672,
                  -0.18000000715255737,
                  -46.880001068115234
                ],
                [
                  -17.280000686645508,
                  -0.3700000047683716,
                  -93.75
                ],
                [
                  -26.290000915527344,
                  3.859999895095825,
                  -140.6199951171875
                ],
                [
                  -33.459999084472656,
                  1.100000023841858,
                  -181.6199951171875
                ],
                [
                  -35.849998474121094,
                  15.260000228881836,
                  -217.4600067138672
                ],
                [
                  -36.029998779296875,
                  27.56999969482422,
                  -248.52999877929688
                ],
                [
                  -36.209999084472656,
                  36.58000183105469,
                  -277.0199890136719
                ],
                [
                  -36.400001525878906,
                  43.0099983215332,
                  -302.94000244140625
                ],
                [
                  -36.58000183105469,
                  47.61000061035156,
                  -325.54998779296875
                ],
                [
                  -36.7599983215332,
                  52.209999084472656,
                  -345.2200012207031
                ],
                [
                  -36.95000076293945,
                  56.43000030517578,
                  -360.1099853515625
                ],
                [
                  -37.130001068115234,
                  60.65999984741211,
                  -370.2200012207031
                ],
                [
                  -37.31999969482422,
                  63.41999816894531,
                  -375.9200134277344
                ],
                [
                  -37.5,
                  64.33999633789062,
                  -377.57000732421875
                ],
                [
                  -37.68000030517578,
                  64.1500015258789,
                  -377.760009765625
                ],
                [
                  -37.869998931884766,
                  63.970001220703125,
                  -376.8399963378906
                ],
                [
                  -38.04999923706055,
                  63.790000915527344,
                  -372.239990234375
                ],
                [
                  -38.2400016784668,
                  63.2400016784668,
                  -363.9700012207031
                ],
                [
                  -38.41999816894531,
                  63.04999923706055,
                  -354.2300109863281
                ],
                [
                  -38.599998474121094,
                  62.869998931884766,
                  -343.3800048828125
                ],
                [
                  -38.790000915527344,
                  62.68000030517578,
                  -334.010009765625
                ],
                [
                  -38.970001220703125,
                  62.5,
                  -326.1000061035156
                ],
                [
                  -39.150001525878906,
                  62.31999969482422,
                  -318.20001220703125
                ],
                [
                  -39.34000015258789,
                  62.130001068115234,
                  -307.3500061035156
                ],
                [
                  -39.52000045776367,
                  63.41999816894531,
                  -288.7900085449219
                ],
                [
                  -39.709999084472656,
                  68.01000213623047,
                  -261.3999938964844
                ],
                [
                  -39.88999938964844,
                  74.44999694824219,
                  -228.49000549316406
                ],
                [
                  -34.189998626708984,
                  82.72000122070312,
                  -186.75999450683594
                ],
                [
                  -18.56999969482422,
                  91.36000061035156,
                  -142.4600067138672
                ],
                [
                  5.880000114440918,
                  93.75,
                  -95.58999633789062
                ],
                [
                  38.41999816894531,
                  93.56999969482422,
                  -50.54999923706055
                ],
                [
                  75.73999786376953,
                  85.29000091552734,
                  -15.4399995803833
                ]
              ]
            },
            "mid": {
              "token_pos": 100,
              "n_tokens": 224,
              "max_dev_mm": 7.35,
              "xyz_mm": [
                [
                  -8.270000457763672,
                  -0.18000000715255737,
                  -46.880001068115234
                ],
                [
                  -17.280000686645508,
                  -0.3700000047683716,
                  -93.75
                ],
                [
                  -26.290000915527344,
                  3.859999895095825,
                  -140.6199951171875
                ],
                [
                  -33.459999084472656,
                  15.069999694824219,
                  -181.6199951171875
                ],
                [
                  -35.849998474121094,
                  29.229999542236328,
                  -217.4600067138672
                ],
                [
                  -36.029998779296875,
                  41.540000915527344,
                  -248.52999877929688
                ],
                [
                  -36.209999084472656,
                  50.54999923706055,
                  -277.0199890136719
                ],
                [
                  -36.400001525878906,
                  56.9900016784668,
                  -302.94000244140625
                ],
                [
                  -36.58000183105469,
                  61.58000183105469,
                  -325.54998779296875
                ],
                [
                  -36.7599983215332,
                  66.18000030517578,
                  -345.2200012207031
                ],
                [
                  -36.95000076293945,
                  70.4000015258789,
                  -360.1099853515625
                ],
                [
                  -37.130001068115234,
                  74.62999725341797,
                  -370.2200012207031
                ],
                [
                  -37.31999969482422,
                  77.38999938964844,
                  -375.9200134277344
                ],
                [
                  -37.5,
                  78.30999755859375,
                  -377.57000732421875
                ],
                [
                  -37.68000030517578,
                  78.12000274658203,
                  -385.1099853515625
                ],
                [
                  -37.869998931884766,
                  77.94000244140625,
                  -384.19000244140625
                ],
                [
                  -38.04999923706055,
                  77.76000213623047,
                  -379.6000061035156
                ],
                [
                  -38.2400016784668,
                  77.20999908447266,
                  -371.32000732421875
                ],
                [
                  -38.41999816894531,
                  77.0199966430664,
                  -361.5799865722656
                ],
                [
                  -38.599998474121094,
                  76.83999633789062,
                  -350.739990234375
                ],
                [
                  -38.790000915527344,
                  76.6500015258789,
                  -341.3599853515625
                ],
                [
                  -38.970001220703125,
                  76.47000122070312,
                  -333.4599914550781
                ],
                [
                  -39.150001525878906,
                  76.29000091552734,
                  -325.54998779296875
                ],
                [
                  -39.34000015258789,
                  76.0999984741211,
                  -314.7099914550781
                ],
                [
                  -39.52000045776367,
                  77.38999938964844,
                  -296.1400146484375
                ],
                [
                  -39.709999084472656,
                  81.98999786376953,
                  -268.75
                ],
                [
                  -39.88999938964844,
                  88.41999816894531,
                  -235.85000610351562
                ],
                [
                  -34.189998626708984,
                  96.69000244140625,
                  -194.1199951171875
                ],
                [
                  -18.56999969482422,
                  105.33000183105469,
                  -149.82000732421875
                ],
                [
                  5.880000114440918,
                  107.72000122070312,
                  -102.94000244140625
                ],
                [
                  38.41999816894531,
                  107.54000091552734,
                  -57.900001525878906
                ],
                [
                  75.73999786376953,
                  99.26000213623047,
                  -22.790000915527344
                ]
              ]
            },
            "late": {
              "token_pos": 190,
              "n_tokens": 224,
              "max_dev_mm": 6.62,
              "xyz_mm": [
                [
                  -8.270000457763672,
                  -0.18000000715255737,
                  -46.880001068115234
                ],
                [
                  -17.280000686645508,
                  -0.3700000047683716,
                  -93.75
                ],
                [
                  -26.290000915527344,
                  3.859999895095825,
                  -140.6199951171875
                ],
                [
                  -33.459999084472656,
                  15.069999694824219,
                  -181.6199951171875
                ],
                [
                  -35.849998474121094,
                  29.229999542236328,
                  -217.4600067138672
                ],
                [
                  -36.029998779296875,
                  41.540000915527344,
                  -248.52999877929688
                ],
                [
                  -36.209999084472656,
                  50.54999923706055,
                  -277.0199890136719
                ],
                [
                  -36.400001525878906,
                  56.9900016784668,
                  -302.94000244140625
                ],
                [
                  -36.58000183105469,
                  61.58000183105469,
                  -325.54998779296875
                ],
                [
                  -36.7599983215332,
                  66.18000030517578,
                  -345.2200012207031
                ],
                [
                  -36.95000076293945,
                  70.4000015258789,
                  -360.1099853515625
                ],
                [
                  -37.130001068115234,
                  74.62999725341797,
                  -370.2200012207031
                ],
                [
                  -37.31999969482422,
                  77.38999938964844,
                  -375.9200134277344
                ],
                [
                  -37.5,
                  78.30999755859375,
                  -377.57000732421875
                ],
                [
                  -37.68000030517578,
                  78.12000274658203,
                  -377.760009765625
                ],
                [
                  -37.869998931884766,
                  77.94000244140625,
                  -376.8399963378906
                ],
                [
                  -38.04999923706055,
                  77.76000213623047,
                  -372.239990234375
                ],
                [
                  -38.2400016784668,
                  77.20999908447266,
                  -363.9700012207031
                ],
                [
                  -38.41999816894531,
                  77.0199966430664,
                  -354.2300109863281
                ],
                [
                  -38.599998474121094,
                  76.83999633789062,
                  -343.3800048828125
                ],
                [
                  -38.790000915527344,
                  76.6500015258789,
                  -334.010009765625
                ],
                [
                  -38.970001220703125,
                  76.47000122070312,
                  -326.1000061035156
                ],
                [
                  -39.150001525878906,
                  76.29000091552734,
                  -318.20001220703125
                ],
                [
                  -39.34000015258789,
                  76.0999984741211,
                  -307.3500061035156
                ],
                [
                  -39.52000045776367,
                  77.38999938964844,
                  -288.7900085449219
                ],
                [
                  -39.709999084472656,
                  81.98999786376953,
                  -261.3999938964844
                ],
                [
                  -39.88999938964844,
                  88.41999816894531,
                  -228.49000549316406
                ],
                [
                  -34.189998626708984,
                  90.06999969482422,
                  -186.75999450683594
                ],
                [
                  -18.56999969482422,
                  98.70999908447266,
                  -142.4600067138672
                ],
                [
                  5.880000114440918,
                  101.0999984741211,
                  -95.58999633789062
                ],
                [
                  38.41999816894531,
                  100.91999816894531,
                  -50.54999923706055
                ],
                [
                  75.73999786376953,
                  92.6500015258789,
                  -15.4399995803833
                ]
              ]
            }
          }
        }
      },
      "FAST": {
        "codec_name": "fast",
        "vocab_size": 1024,
        "tokens_per_window_mean": 55.35,
        "tokens_per_window_p95": 83.0,
        "recon_mse_e3": 0.2843,
        "recon_pos_mae_mm": 8.31,
        "recon_pos_p99_mm": 18.82,
        "recon_pos_max_mm": 23.1,
        "single_tok_dev_p50_mm": 17.92,
        "single_tok_dev_p90_mm": 583.9,
        "single_tok_dev_p99_mm": 1502.17,
        "single_tok_fallback_rate": 0.0087,
        "perturbation_by_position": [
          {
            "rel_pos": 0.0,
            "max_dev_p50_mm": 687.5,
            "max_dev_p90_mm": 1404.4,
            "mean_dev_p50_mm": 431.79,
            "fallback_rate": 0.052
          },
          {
            "rel_pos": 0.15,
            "max_dev_p50_mm": 138.11,
            "max_dev_p90_mm": 339.98,
            "mean_dev_p50_mm": 75.27,
            "fallback_rate": 0.0
          },
          {
            "rel_pos": 0.35,
            "max_dev_p50_mm": 35.01,
            "max_dev_p90_mm": 82.53,
            "mean_dev_p50_mm": 17.04,
            "fallback_rate": 0.0
          },
          {
            "rel_pos": 0.55,
            "max_dev_p50_mm": 12.14,
            "max_dev_p90_mm": 34.68,
            "mean_dev_p50_mm": 5.37,
            "fallback_rate": 0.0
          },
          {
            "rel_pos": 0.75,
            "max_dev_p50_mm": 6.36,
            "max_dev_p90_mm": 20.7,
            "mean_dev_p50_mm": 2.77,
            "fallback_rate": 0.0
          },
          {
            "rel_pos": 0.9,
            "max_dev_p50_mm": 3.35,
            "max_dev_p90_mm": 16.24,
            "mean_dev_p50_mm": 1.57,
            "fallback_rate": 0.0
          }
        ],
        "prefix_recovery": null,
        "positional_entropy": [
          {
            "pos": 0,
            "n": 600,
            "h_marginal": 6.598,
            "h_cond": 6.598
          },
          {
            "pos": 1,
            "n": 600,
            "h_marginal": 6.813,
            "h_cond": 2.454
          },
          {
            "pos": 2,
            "n": 600,
            "h_marginal": 6.784,
            "h_cond": 2.306
          },
          {
            "pos": 3,
            "n": 600,
            "h_marginal": 6.602,
            "h_cond": 2.25
          },
          {
            "pos": 4,
            "n": 600,
            "h_marginal": 6.635,
            "h_cond": 2.479
          },
          {
            "pos": 5,
            "n": 600,
            "h_marginal": 6.272,
            "h_cond": 2.319
          },
          {
            "pos": 6,
            "n": 600,
            "h_marginal": 6.785,
            "h_cond": 2.698
          },
          {
            "pos": 7,
            "n": 600,
            "h_marginal": 6.898,
            "h_cond": 2.301
          },
          {
            "pos": 8,
            "n": 600,
            "h_marginal": 6.801,
            "h_cond": 2.214
          },
          {
            "pos": 9,
            "n": 600,
            "h_marginal": 6.874,
            "h_cond": 2.26
          },
          {
            "pos": 10,
            "n": 600,
            "h_marginal": 6.814,
            "h_cond": 2.13
          },
          {
            "pos": 11,
            "n": 600,
            "h_marginal": 7.123,
            "h_cond": 2.32
          },
          {
            "pos": 12,
            "n": 600,
            "h_marginal": 6.884,
            "h_cond": 1.966
          },
          {
            "pos": 13,
            "n": 600,
            "h_marginal": 6.731,
            "h_cond": 2.129
          },
          {
            "pos": 14,
            "n": 600,
            "h_marginal": 6.919,
            "h_cond": 2.233
          },
          {
            "pos": 15,
            "n": 600,
            "h_marginal": 6.832,
            "h_cond": 2.101
          },
          {
            "pos": 16,
            "n": 600,
            "h_marginal": 6.733,
            "h_cond": 2.158
          },
          {
            "pos": 17,
            "n": 600,
            "h_marginal": 6.784,
            "h_cond": 2.194
          },
          {
            "pos": 18,
            "n": 600,
            "h_marginal": 6.797,
            "h_cond": 2.145
          },
          {
            "pos": 19,
            "n": 600,
            "h_marginal": 6.804,
            "h_cond": 2.127
          },
          {
            "pos": 20,
            "n": 600,
            "h_marginal": 6.384,
            "h_cond": 2.08
          },
          {
            "pos": 21,
            "n": 600,
            "h_marginal": 6.437,
            "h_cond": 2.37
          },
          {
            "pos": 22,
            "n": 600,
            "h_marginal": 6.303,
            "h_cond": 2.337
          },
          {
            "pos": 23,
            "n": 598,
            "h_marginal": 6.506,
            "h_cond": 2.478
          },
          {
            "pos": 24,
            "n": 596,
            "h_marginal": 6.14,
            "h_cond": 2.2
          },
          {
            "pos": 25,
            "n": 594,
            "h_marginal": 6.228,
            "h_cond": 2.431
          },
          {
            "pos": 26,
            "n": 591,
            "h_marginal": 6.219,
            "h_cond": 2.425
          },
          {
            "pos": 27,
            "n": 589,
            "h_marginal": 6.217,
            "h_cond": 2.394
          },
          {
            "pos": 28,
            "n": 581,
            "h_marginal": 5.829,
            "h_cond": 2.336
          },
          {
            "pos": 29,
            "n": 573,
            "h_marginal": 6.189,
            "h_cond": 2.601
          },
          {
            "pos": 30,
            "n": 557,
            "h_marginal": 5.993,
            "h_cond": 2.299
          },
          {
            "pos": 31,
            "n": 551,
            "h_marginal": 6.065,
            "h_cond": 2.448
          },
          {
            "pos": 32,
            "n": 539,
            "h_marginal": 5.91,
            "h_cond": 2.341
          },
          {
            "pos": 33,
            "n": 524,
            "h_marginal": 6.143,
            "h_cond": 2.56
          },
          {
            "pos": 34,
            "n": 507,
            "h_marginal": 5.931,
            "h_cond": 2.267
          },
          {
            "pos": 35,
            "n": 491,
            "h_marginal": 5.856,
            "h_cond": 2.366
          },
          {
            "pos": 36,
            "n": 477,
            "h_marginal": 5.993,
            "h_cond": 2.41
          },
          {
            "pos": 37,
            "n": 468,
            "h_marginal": 6.0,
            "h_cond": 2.338
          },
          {
            "pos": 38,
            "n": 448,
            "h_marginal": 5.832,
            "h_cond": 2.29
          },
          {
            "pos": 39,
            "n": 427,
            "h_marginal": 5.99,
            "h_cond": 2.436
          },
          {
            "pos": 40,
            "n": 414,
            "h_marginal": 5.869,
            "h_cond": 2.178
          },
          {
            "pos": 41,
            "n": 401,
            "h_marginal": 5.8,
            "h_cond": 2.272
          },
          {
            "pos": 42,
            "n": 389,
            "h_marginal": 5.746,
            "h_cond": 2.269
          },
          {
            "pos": 43,
            "n": 374,
            "h_marginal": 5.607,
            "h_cond": 2.266
          },
          {
            "pos": 44,
            "n": 359,
            "h_marginal": 5.589,
            "h_cond": 2.22
          },
          {
            "pos": 45,
            "n": 354,
            "h_marginal": 5.462,
            "h_cond": 2.273
          },
          {
            "pos": 46,
            "n": 346,
            "h_marginal": 5.487,
            "h_cond": 2.274
          },
          {
            "pos": 47,
            "n": 342,
            "h_marginal": 5.408,
            "h_cond": 2.198
          }
        ],
        "prc_at_32": 0.0648,
        "hero": {
          "clean_xyz_mm": [
            [
              -7.199999809265137,
              -1.0299999713897705,
              -45.880001068115234
            ],
            [
              -16.1299991607666,
              0.5400000214576721,
              -94.33999633789062
            ],
            [
              -25.549999237060547,
              6.420000076293945,
              -142.22000122070312
            ],
            [
              -32.18000030517578,
              16.700000762939453,
              -183.92999267578125
            ],
            [
              -34.43000030517578,
              29.56999969482422,
              -218.5
            ],
            [
              -34.06999969482422,
              42.119998931884766,
              -249.5800018310547
            ],
            [
              -34.060001373291016,
              51.86000061035156,
              -279.5299987792969
            ],
            [
              -35.34000015258789,
              58.150001525878906,
              -306.9599914550781
            ],
            [
              -36.65999984741211,
              62.279998779296875,
              -330.1700134277344
            ],
            [
              -36.939998626708984,
              66.12999725341797,
              -349.4200134277344
            ],
            [
              -36.75,
              70.55000305175781,
              -365.0
            ],
            [
              -37.220001220703125,
              74.86000061035156,
              -375.8800048828125
            ],
            [
              -38.279998779296875,
              77.79000091552734,
              -381.7200012207031
            ],
            [
              -38.86000061035156,
              78.91999816894531,
              -384.20001220703125
            ],
            [
              -38.54999923706055,
              79.16999816894531,
              -384.6700134277344
            ],
            [
              -38.119998931884766,
              79.7699966430664,
              -382.510009765625
            ],
            [
              -38.33000183105469,
              81.0,
              -377.0
            ],
            [
              -38.869998931884766,
              81.9000015258789,
              -369.3800048828125
            ],
            [
              -39.029998779296875,
              81.31999969482422,
              -361.4100036621094
            ],
            [
              -38.83000183105469,
              79.26000213623047,
              -353.4800109863281
            ],
            [
              -38.7400016784668,
              76.97000122070312,
              -345.55999755859375
            ],
            [
              -38.52000045776367,
              75.86000061035156,
              -338.3299865722656
            ],
            [
              -37.31999969482422,
              76.27999877929688,
              -331.17999267578125
            ],
            [
              -35.310001373291016,
              77.6500015258789,
              -320.3800048828125
            ],
            [
              -34.22999954223633,
              79.6500015258789,
              -301.7099914550781
            ],
            [
              -35.130001068115234,
              83.0999984741211,
              -274.3599853515625
            ],
            [
              -35.560001373291016,
              89.30000305175781,
              -239.85000610351562
            ],
            [
              -30.06999969482422,
              98.16000366210938,
              -198.82000732421875
            ],
            [
              -14.210000038146973,
              107.11000061035156,
              -152.00999450683594
            ],
            [
              11.90999984741211,
              112.30000305175781,
              -104.1500015258789
            ],
            [
              44.5,
              111.47000122070312,
              -61.95000076293945
            ],
            [
              79.55000305175781,
              106.06999969482422,
              -26.520000457763672
            ]
          ],
          "n_tokens": 77,
          "perturbed": {
            "early": {
              "token_pos": 8,
              "n_tokens": 77,
              "max_dev_mm": 86.66,
              "xyz_mm": [
                [
                  -13.5600004196167,
                  -0.7799999713897705,
                  -37.31999969482422
                ],
                [
                  -24.40999984741211,
                  -4.519999980926514,
                  -75.83000183105469
                ],
                [
                  -30.729999542236328,
                  -8.460000038146973,
                  -115.98999786376953
                ],
                [
                  -32.310001373291016,
                  -7.420000076293945,
                  -157.17999267578125
                ],
                [
                  -30.860000610351562,
                  -0.7599999904632568,
                  -197.86000061035156
                ],
                [
                  -29.200000762939453,
                  7.480000019073486,
                  -236.1999969482422
                ],
                [
                  -29.700000762939453,
                  14.619999885559082,
                  -270.79998779296875
                ],
                [
                  -32.90999984741211,
                  21.719999313354492,
                  -301.1400146484375
                ],
                [
                  -37.47999954223633,
                  30.200000762939453,
                  -327.6099853515625
                ],
                [
                  -41.45000076293945,
                  39.529998779296875,
                  -351.07000732421875
                ],
                [
                  -43.869998931884766,
                  49.16999816894531,
                  -372.17999267578125
                ],
                [
                  -45.40999984741211,
                  59.97999954223633,
                  -391.0
                ],
                [
                  -47.2599983215332,
                  72.08999633789062,
                  -406.79998779296875
                ],
                [
                  -49.79999923706055,
                  83.7300033569336,
                  -418.4100036621094
                ],
                [
                  -52.099998474121094,
                  93.41999816894531,
                  -424.7099914550781
                ],
                [
                  -52.900001525878906,
                  101.7300033569336,
                  -425.0400085449219
                ],
                [
                  -51.93000030517578,
                  109.37000274658203,
                  -419.4100036621094
                ],
                [
                  -50.13999938964844,
                  115.12000274658203,
                  -408.3399963378906
                ],
                [
                  -48.689998626708984,
                  117.2699966430664,
                  -392.5400085449219
                ],
                [
                  -47.630001068115234,
                  115.5199966430664,
                  -372.6700134277344
                ],
                [
                  -45.7400016784668,
                  110.05000305175781,
                  -349.2099914550781
                ],
                [
                  -41.65999984741211,
                  100.33000183105469,
                  -322.5899963378906
                ],
                [
                  -35.09000015258789,
                  87.19000244140625,
                  -293.4200134277344
                ],
                [
                  -26.670000076293945,
                  74.5999984741211,
                  -262.5400085449219
                ],
                [
                  -16.81999969482422,
                  67.01000213623047,
                  -230.99000549316406
                ],
                [
                  -4.789999961853027,
                  65.56999969482422,
                  -199.74000549316406
                ],
                [
                  10.640000343322754,
                  69.02999877929688,
                  -169.39999389648438
                ],
                [
                  29.260000228881836,
                  77.13999938964844,
                  -140.10000610351562
                ],
                [
                  48.41999816894531,
                  89.47000122070312,
                  -111.54000091552734
                ],
                [
                  64.1500015258789,
                  101.68000030517578,
                  -83.27999877929688
                ],
                [
                  74.08000183105469,
                  107.45999908447266,
                  -54.959999084472656
                ],
                [
                  79.55000305175781,
                  106.06999969482422,
                  -26.520000457763672
                ]
              ]
            },
            "mid": {
              "token_pos": 34,
              "n_tokens": 77,
              "max_dev_mm": 24.81,
              "xyz_mm": [
                [
                  -20.09000015258789,
                  1.9900000095367432,
                  -50.0
                ],
                [
                  -33.33000183105469,
                  3.4200000762939453,
                  -98.97000122070312
                ],
                [
                  -35.38999938964844,
                  6.21999979019165,
                  -142.72000122070312
                ],
                [
                  -27.280000686645508,
                  13.579999923706055,
                  -180.6199951171875
                ],
                [
                  -17.219999313354492,
                  26.209999084472656,
                  -213.8300018310547
                ],
                [
                  -19.65999984741211,
                  40.900001525878906,
                  -244.52000427246094
                ],
                [
                  -26.420000076293945,
                  53.22999954223633,
                  -274.4200134277344
                ],
                [
                  -58.27000045776367,
                  61.15999984741211,
                  -303.4100036621094
                ],
                [
                  -61.22999954223633,
                  65.69999694824219,
                  -329.57000732421875
                ],
                [
                  -16.989999771118164,
                  68.51000213623047,
                  -350.55999755859375
                ],
                [
                  -26.790000915527344,
                  70.2300033569336,
                  -365.2900085449219
                ],
                [
                  -35.16999816894531,
                  71.1500015258789,
                  -374.5199890136719
                ],
                [
                  -44.369998931884766,
                  72.37999725341797,
                  -379.8999938964844
                ],
                [
                  -43.52000045776367,
                  75.33999633789062,
                  -382.44000244140625
                ],
                [
                  -42.27000045776367,
                  79.93000030517578,
                  -382.0899963378906
                ],
                [
                  -36.09000015258789,
                  84.2300033569336,
                  -378.5199890136719
                ],
                [
                  -34.029998779296875,
                  86.19000244140625,
                  -372.3500061035156
                ],
                [
                  -32.349998474121094,
                  85.19999694824219,
                  -365.3299865722656
                ],
                [
                  -37.790000915527344,
                  81.93000030517578,
                  -359.0899963378906
                ],
                [
                  -42.0099983215332,
                  77.30000305175781,
                  -353.8800048828125
                ],
                [
                  -44.38999938964844,
                  72.5999984741211,
                  -348.2799987792969
                ],
                [
                  -42.5,
                  70.0,
                  -340.4200134277344
                ],
                [
                  -39.560001373291016,
                  71.80999755859375,
                  -329.2099914550781
                ],
                [
                  -32.75,
                  78.16999816894531,
                  -314.3399963378906
                ],
                [
                  -29.809999465942383,
                  86.12999725341797,
                  -295.2200012207031
                ],
                [
                  -30.649999618530273,
                  92.02999877929688,
                  -270.260009765625
                ],
                [
                  -32.27000045776367,
                  94.87999725341797,
                  -237.6199951171875
                ],
                [
                  -29.84000015258789,
                  96.80000305175781,
                  -197.27000427246094
                ],
                [
                  -17.540000915527344,
                  99.93000030517578,
                  -152.02999877929688
                ],
                [
                  4.670000076293945,
                  103.69999694824219,
                  -106.4800033569336
                ],
                [
                  38.099998474121094,
                  105.91999816894531,
                  -64.0
                ],
                [
                  79.55000305175781,
                  106.06999969482422,
                  -24.520000457763672
                ]
              ]
            },
            "late": {
              "token_pos": 65,
              "n_tokens": 77,
              "max_dev_mm": 0.0,
              "xyz_mm": [
                [
                  -7.199999809265137,
                  -1.0299999713897705,
                  -45.880001068115234
                ],
                [
                  -16.1299991607666,
                  0.5400000214576721,
                  -94.33999633789062
                ],
                [
                  -25.549999237060547,
                  6.420000076293945,
                  -142.22000122070312
                ],
                [
                  -32.18000030517578,
                  16.700000762939453,
                  -183.92999267578125
                ],
                [
                  -34.43000030517578,
                  29.56999969482422,
                  -218.5
                ],
                [
                  -34.06999969482422,
                  42.119998931884766,
                  -249.5800018310547
                ],
                [
                  -34.060001373291016,
                  51.86000061035156,
                  -279.5299987792969
                ],
                [
                  -35.34000015258789,
                  58.150001525878906,
                  -306.9599914550781
                ],
                [
                  -36.65999984741211,
                  62.279998779296875,
                  -330.1700134277344
                ],
                [
                  -36.939998626708984,
                  66.12999725341797,
                  -349.4200134277344
                ],
                [
                  -36.75,
                  70.55000305175781,
                  -365.0
                ],
                [
                  -37.220001220703125,
                  74.86000061035156,
                  -375.8800048828125
                ],
                [
                  -38.279998779296875,
                  77.79000091552734,
                  -381.7200012207031
                ],
                [
                  -38.86000061035156,
                  78.91999816894531,
                  -384.20001220703125
                ],
                [
                  -38.54999923706055,
                  79.16999816894531,
                  -384.6700134277344
                ],
                [
                  -38.119998931884766,
                  79.7699966430664,
                  -382.510009765625
                ],
                [
                  -38.33000183105469,
                  81.0,
                  -377.0
                ],
                [
                  -38.869998931884766,
                  81.9000015258789,
                  -369.3800048828125
                ],
                [
                  -39.029998779296875,
                  81.31999969482422,
                  -361.4100036621094
                ],
                [
                  -38.83000183105469,
                  79.26000213623047,
                  -353.4800109863281
                ],
                [
                  -38.7400016784668,
                  76.97000122070312,
                  -345.55999755859375
                ],
                [
                  -38.52000045776367,
                  75.86000061035156,
                  -338.3299865722656
                ],
                [
                  -37.31999969482422,
                  76.27999877929688,
                  -331.17999267578125
                ],
                [
                  -35.310001373291016,
                  77.6500015258789,
                  -320.3800048828125
                ],
                [
                  -34.22999954223633,
                  79.6500015258789,
                  -301.7099914550781
                ],
                [
                  -35.130001068115234,
                  83.0999984741211,
                  -274.3599853515625
                ],
                [
                  -35.560001373291016,
                  89.30000305175781,
                  -239.85000610351562
                ],
                [
                  -30.06999969482422,
                  98.16000366210938,
                  -198.82000732421875
                ],
                [
                  -14.210000038146973,
                  107.11000061035156,
                  -152.00999450683594
                ],
                [
                  11.90999984741211,
                  112.30000305175781,
                  -104.1500015258789
                ],
                [
                  44.5,
                  111.47000122070312,
                  -61.95000076293945
                ],
                [
                  79.55000305175781,
                  106.06999969482422,
                  -26.520000457763672
                ]
              ]
            }
          }
        }
      },
      "OAT": {
        "codec_name": "oat",
        "vocab_size": 1024,
        "tokens_per_window_mean": 16.0,
        "tokens_per_window_p95": 16.0,
        "recon_mse_e3": 1.4309,
        "recon_pos_mae_mm": 35.09,
        "recon_pos_p99_mm": 102.16,
        "recon_pos_max_mm": 192.69,
        "single_tok_dev_p50_mm": 91.08,
        "single_tok_dev_p90_mm": 242.17,
        "single_tok_dev_p99_mm": 684.95,
        "single_tok_fallback_rate": 0.0,
        "perturbation_by_position": [
          {
            "rel_pos": 0.0,
            "max_dev_p50_mm": 230.91,
            "max_dev_p90_mm": 591.03,
            "mean_dev_p50_mm": 139.32,
            "fallback_rate": 0.0
          },
          {
            "rel_pos": 0.15,
            "max_dev_p50_mm": 106.62,
            "max_dev_p90_mm": 208.63,
            "mean_dev_p50_mm": 88.19,
            "fallback_rate": 0.0
          },
          {
            "rel_pos": 0.35,
            "max_dev_p50_mm": 134.48,
            "max_dev_p90_mm": 228.45,
            "mean_dev_p50_mm": 37.04,
            "fallback_rate": 0.0
          },
          {
            "rel_pos": 0.55,
            "max_dev_p50_mm": 42.15,
            "max_dev_p90_mm": 80.12,
            "mean_dev_p50_mm": 10.44,
            "fallback_rate": 0.0
          },
          {
            "rel_pos": 0.75,
            "max_dev_p50_mm": 94.4,
            "max_dev_p90_mm": 164.62,
            "mean_dev_p50_mm": 58.38,
            "fallback_rate": 0.0
          },
          {
            "rel_pos": 0.9,
            "max_dev_p50_mm": 54.29,
            "max_dev_p90_mm": 99.99,
            "mean_dev_p50_mm": 45.09,
            "fallback_rate": 0.0
          }
        ],
        "prefix_recovery": null,
        "positional_entropy": [
          {
            "pos": 0,
            "n": 600,
            "h_marginal": 7.349,
            "h_cond": 7.349
          },
          {
            "pos": 1,
            "n": 600,
            "h_marginal": 8.608,
            "h_cond": 1.774
          },
          {
            "pos": 2,
            "n": 600,
            "h_marginal": 8.633,
            "h_cond": 0.607
          },
          {
            "pos": 3,
            "n": 600,
            "h_marginal": 8.561,
            "h_cond": 0.583
          },
          {
            "pos": 4,
            "n": 600,
            "h_marginal": 8.66,
            "h_cond": 0.652
          },
          {
            "pos": 5,
            "n": 600,
            "h_marginal": 8.619,
            "h_cond": 0.555
          },
          {
            "pos": 6,
            "n": 600,
            "h_marginal": 8.639,
            "h_cond": 0.599
          },
          {
            "pos": 7,
            "n": 600,
            "h_marginal": 8.657,
            "h_cond": 0.59
          },
          {
            "pos": 8,
            "n": 600,
            "h_marginal": 8.5,
            "h_cond": 0.521
          },
          {
            "pos": 9,
            "n": 600,
            "h_marginal": 8.548,
            "h_cond": 0.719
          },
          {
            "pos": 10,
            "n": 600,
            "h_marginal": 8.472,
            "h_cond": 0.668
          },
          {
            "pos": 11,
            "n": 600,
            "h_marginal": 8.38,
            "h_cond": 0.733
          },
          {
            "pos": 12,
            "n": 600,
            "h_marginal": 8.583,
            "h_cond": 0.809
          },
          {
            "pos": 13,
            "n": 600,
            "h_marginal": 8.467,
            "h_cond": 0.633
          },
          {
            "pos": 14,
            "n": 600,
            "h_marginal": 8.42,
            "h_cond": 0.752
          },
          {
            "pos": 15,
            "n": 600,
            "h_marginal": 8.517,
            "h_cond": 0.799
          }
        ],
        "prc_at_32": 0.233,
        "hero": {
          "clean_xyz_mm": [
            [
              -11.720000267028809,
              -1.5499999523162842,
              -48.40999984741211
            ],
            [
              -23.920000076293945,
              -1.6399999856948853,
              -96.38999938964844
            ],
            [
              -34.84000015258789,
              0.6200000047683716,
              -142.5399932861328
            ],
            [
              -42.119998931884766,
              6.059999942779541,
              -185.0399932861328
            ],
            [
              -45.189998626708984,
              14.609999656677246,
              -222.5399932861328
            ],
            [
              -46.13999938964844,
              24.18000030517578,
              -255.4600067138672
            ],
            [
              -47.04999923706055,
              32.439998626708984,
              -285.25
            ],
            [
              -48.869998931884766,
              38.2400016784668,
              -312.6400146484375
            ],
            [
              -51.93000030517578,
              41.5099983215332,
              -337.19000244140625
            ],
            [
              -55.22999954223633,
              44.16999816894531,
              -358.5799865722656
            ],
            [
              -58.95000076293945,
              46.060001373291016,
              -373.75
            ],
            [
              -62.810001373291016,
              48.04999923706055,
              -383.79998779296875
            ],
            [
              -66.61000061035156,
              50.130001068115234,
              -390.1300048828125
            ],
            [
              -69.87000274658203,
              52.02000045776367,
              -393.510009765625
            ],
            [
              -71.94999694824219,
              53.150001525878906,
              -394.4599914550781
            ],
            [
              -72.80999755859375,
              53.290000915527344,
              -393.42999267578125
            ],
            [
              -72.93000030517578,
              52.540000915527344,
              -390.6400146484375
            ],
            [
              -72.80999755859375,
              51.11000061035156,
              -386.4100036621094
            ],
            [
              -72.6500015258789,
              49.31999969482422,
              -381.29998779296875
            ],
            [
              -72.51000213623047,
              47.2400016784668,
              -375.489990234375
            ],
            [
              -72.44999694824219,
              45.04999923706055,
              -368.75
            ],
            [
              -72.61000061035156,
              43.5099983215332,
              -360.7099914550781
            ],
            [
              -72.95999908447266,
              43.13999938964844,
              -350.8599853515625
            ],
            [
              -73.19000244140625,
              43.810001373291016,
              -338.0899963378906
            ],
            [
              -72.66000366210938,
              45.529998779296875,
              -319.989990234375
            ],
            [
              -71.25,
              48.41999816894531,
              -295.1000061035156
            ],
            [
              -67.26000213623047,
              52.130001068115234,
              -262.7900085449219
            ],
            [
              -57.380001068115234,
              55.880001068115234,
              -224.35000610351562
            ],
            [
              -41.5,
              59.099998474121094,
              -183.14999389648438
            ],
            [
              -18.690000534057617,
              61.11000061035156,
              -141.02999877929688
            ],
            [
              11.6899995803833,
              61.119998931884766,
              -99.05999755859375
            ],
            [
              47.41999816894531,
              59.040000915527344,
              -57.9900016784668
            ]
          ],
          "n_tokens": 16,
          "perturbed": {
            "early": {
              "token_pos": 2,
              "n_tokens": 16,
              "max_dev_mm": 102.12,
              "xyz_mm": [
                [
                  -31.399999618530273,
                  -0.7799999713897705,
                  -43.7400016784668
                ],
                [
                  -61.619998931884766,
                  -0.41999998688697815,
                  -85.79000091552734
                ],
                [
                  -89.2300033569336,
                  1.5,
                  -126.55000305175781
                ],
                [
                  -111.9800033569336,
                  5.980000019073486,
                  -165.63999938964844
                ],
                [
                  -127.25,
                  13.760000228881836,
                  -201.58999633789062
                ],
                [
                  -135.74000549316406,
                  23.280000686645508,
                  -233.75999450683594
                ],
                [
                  -141.39999389648438,
                  32.060001373291016,
                  -263.04998779296875
                ],
                [
                  -146.25,
                  38.900001525878906,
                  -289.9599914550781
                ],
                [
                  -150.58999633789062,
                  43.25,
                  -313.8500061035156
                ],
                [
                  -154.30999755859375,
                  46.279998779296875,
                  -333.9700012207031
                ],
                [
                  -157.80999755859375,
                  48.349998474121094,
                  -349.1199951171875
                ],
                [
                  -161.10000610351562,
                  50.349998474121094,
                  -359.5400085449219
                ],
                [
                  -164.02999877929688,
                  52.2599983215332,
                  -366.1300048828125
                ],
                [
                  -166.3300018310547,
                  53.7599983215332,
                  -369.4599914550781
                ],
                [
                  -167.4600067138672,
                  54.20000076293945,
                  -370.1600036621094
                ],
                [
                  -167.5,
                  53.560001373291016,
                  -368.9100036621094
                ],
                [
                  -166.97999572753906,
                  52.119998931884766,
                  -365.9800109863281
                ],
                [
                  -166.3699951171875,
                  50.20000076293945,
                  -361.6000061035156
                ],
                [
                  -165.8699951171875,
                  48.099998474121094,
                  -356.32000732421875
                ],
                [
                  -165.47000122070312,
                  45.869998931884766,
                  -350.3399963378906
                ],
                [
                  -165.1999969482422,
                  43.65999984741211,
                  -343.4700012207031
                ],
                [
                  -165.17999267578125,
                  42.150001525878906,
                  -335.3999938964844
                ],
                [
                  -165.39999389648438,
                  41.79999923706055,
                  -325.55999755859375
                ],
                [
                  -165.35000610351562,
                  42.560001373291016,
                  -312.3900146484375
                ],
                [
                  -164.33999633789062,
                  44.459999084472656,
                  -293.1400146484375
                ],
                [
                  -162.41000366210938,
                  47.33000183105469,
                  -267.20001220703125
                ],
                [
                  -157.64999389648438,
                  50.77000045776367,
                  -234.66000366210938
                ],
                [
                  -147.58999633789062,
                  54.310001373291016,
                  -196.5500030517578
                ],
                [
                  -131.8800048828125,
                  57.5099983215332,
                  -155.5
                ],
                [
                  -109.70999908447266,
                  59.86000061035156,
                  -113.18000030517578
                ],
                [
                  -80.77999877929688,
                  60.68000030517578,
                  -70.63999938964844
                ],
                [
                  -46.650001525878906,
                  59.630001068115234,
                  -28.770000457763672
                ]
              ]
            },
            "mid": {
              "token_pos": 7,
              "n_tokens": 16,
              "max_dev_mm": 55.15,
              "xyz_mm": [
                [
                  -11.489999771118164,
                  -1.4600000381469727,
                  -48.290000915527344
                ],
                [
                  -23.5,
                  -1.4900000095367432,
                  -96.16999816894531
                ],
                [
                  -34.349998474121094,
                  0.800000011920929,
                  -142.2899932861328
                ],
                [
                  -41.630001068115234,
                  6.21999979019165,
                  -184.82000732421875
                ],
                [
                  -44.720001220703125,
                  14.75,
                  -222.3699951171875
                ],
                [
                  -45.689998626708984,
                  24.31999969482422,
                  -255.3300018310547
                ],
                [
                  -46.630001068115234,
                  32.59000015258789,
                  -285.1499938964844
                ],
                [
                  -48.439998626708984,
                  38.38999938964844,
                  -312.5299987792969
                ],
                [
                  -51.459999084472656,
                  41.630001068115234,
                  -337.05999755859375
                ],
                [
                  -54.7400016784668,
                  44.31999969482422,
                  -358.3599853515625
                ],
                [
                  -58.540000915527344,
                  46.22999954223633,
                  -373.489990234375
                ],
                [
                  -62.560001373291016,
                  48.2400016784668,
                  -383.5299987792969
                ],
                [
                  -66.56999969482422,
                  50.349998474121094,
                  -389.8800048828125
                ],
                [
                  -70.08999633789062,
                  52.290000915527344,
                  -393.2799987792969
                ],
                [
                  -72.44999694824219,
                  53.47999954223633,
                  -394.2900085449219
                ],
                [
                  -73.5999984741211,
                  53.689998626708984,
                  -393.3599853515625
                ],
                [
                  -73.97000122070312,
                  53.0099983215332,
                  -390.70001220703125
                ],
                [
                  -74.0199966430664,
                  51.650001525878906,
                  -386.5799865722656
                ],
                [
                  -74.01000213623047,
                  49.95000076293945,
                  -381.57000732421875
                ],
                [
                  -74.02999877929688,
                  48.0099983215332,
                  -375.8800048828125
                ],
                [
                  -74.20999908447266,
                  45.97999954223633,
                  -369.3699951171875
                ],
                [
                  -74.7699966430664,
                  44.59000015258789,
                  -361.7699890136719
                ],
                [
                  -75.79000091552734,
                  44.36000061035156,
                  -352.5799865722656
                ],
                [
                  -77.0199966430664,
                  45.349998474121094,
                  -340.4700012207031
                ],
                [
                  -77.36000061035156,
                  47.869998931884766,
                  -322.0799865722656
                ],
                [
                  -76.43000030517578,
                  52.349998474121094,
                  -295.05999755859375
                ],
                [
                  -74.56999969482422,
                  58.56999969482422,
                  -259.6600036621094
                ],
                [
                  -69.5999984741211,
                  65.58999633789062,
                  -218.99000549316406
                ],
                [
                  -59.88999938964844,
                  72.2699966430664,
                  -177.4199981689453
                ],
                [
                  -45.36000061035156,
                  77.63999938964844,
                  -137.97999572753906
                ],
                [
                  -26.309999465942383,
                  80.45999908447266,
                  -102.66999816894531
                ],
                [
                  -1.659999966621399,
                  80.38999938964844,
                  -71.30999755859375
                ]
              ]
            },
            "late": {
              "token_pos": 13,
              "n_tokens": 16,
              "max_dev_mm": 18.65,
              "xyz_mm": [
                [
                  -11.949999809265137,
                  -0.8700000047683716,
                  -48.369998931884766
                ],
                [
                  -23.959999084472656,
                  -0.4099999964237213,
                  -96.26000213623047
                ],
                [
                  -34.38999938964844,
                  2.3499999046325684,
                  -142.3800048828125
                ],
                [
                  -41.13999938964844,
                  8.229999542236328,
                  -184.91000366210938
                ],
                [
                  -43.79999923706055,
                  17.15999984741211,
                  -222.4600067138672
                ],
                [
                  -44.459999084472656,
                  27.020000457763672,
                  -255.39999389648438
                ],
                [
                  -45.150001525878906,
                  35.470001220703125,
                  -285.25
                ],
                [
                  -46.77000045776367,
                  41.38999938964844,
                  -312.7699890136719
                ],
                [
                  -49.7400016784668,
                  44.7400016784668,
                  -337.4800109863281
                ],
                [
                  -53.099998474121094,
                  47.349998474121094,
                  -359.05999755859375
                ],
                [
                  -56.970001220703125,
                  49.220001220703125,
                  -374.5299987792969
                ],
                [
                  -61.150001525878906,
                  51.22999954223633,
                  -384.8599853515625
                ],
                [
                  -65.41999816894531,
                  53.31999969482422,
                  -391.510009765625
                ],
                [
                  -69.27999877929688,
                  55.25,
                  -395.25
                ],
                [
                  -72.01000213623047,
                  56.45000076293945,
                  -396.57000732421875
                ],
                [
                  -73.47000122070312,
                  56.689998626708984,
                  -395.8699951171875
                ],
                [
                  -74.16999816894531,
                  56.029998779296875,
                  -393.4599914550781
                ],
                [
                  -74.69999694824219,
                  54.650001525878906,
                  -389.7300109863281
                ],
                [
                  -75.38999938964844,
                  52.86000061035156,
                  -385.2200012207031
                ],
                [
                  -76.4000015258789,
                  50.70000076293945,
                  -380.1600036621094
                ],
                [
                  -77.87000274658203,
                  48.290000915527344,
                  -374.3800048828125
                ],
                [
                  -80.08000183105469,
                  46.369998931884766,
                  -367.57000732421875
                ],
                [
                  -82.93000030517578,
                  45.52000045776367,
                  -359.1400146484375
                ],
                [
                  -85.41999816894531,
                  45.68000030517578,
                  -347.69000244140625
                ],
                [
                  -86.11000061035156,
                  46.79999923706055,
                  -330.45001220703125
                ],
                [
                  -85.01000213623047,
                  49.060001373291016,
                  -305.8299865722656
                ],
                [
                  -81.22000122070312,
                  52.2599983215332,
                  -273.45001220703125
                ],
                [
                  -71.41000366210938,
                  55.65999984741211,
                  -234.86000061035156
                ],
                [
                  -55.61000061035156,
                  58.63999938964844,
                  -193.61000061035156
                ],
                [
                  -32.970001220703125,
                  60.5099983215332,
                  -151.5800018310547
                ],
                [
                  -2.9600000381469727,
                  60.459999084472656,
                  -109.8499984741211
                ],
                [
                  32.439998626708984,
                  58.36000061035156,
                  -69.08000183105469
                ]
              ]
            }
          }
        }
      },
      "QueST": {
        "codec_name": "quest",
        "vocab_size": 1024,
        "tokens_per_window_mean": 16.0,
        "tokens_per_window_p95": 16.0,
        "recon_mse_e3": 1.94,
        "recon_pos_mae_mm": 39.3,
        "recon_pos_p99_mm": 110.59,
        "recon_pos_max_mm": 156.85,
        "single_tok_dev_p50_mm": 121.88,
        "single_tok_dev_p90_mm": 225.21,
        "single_tok_dev_p99_mm": 346.91,
        "single_tok_fallback_rate": 0.0,
        "perturbation_by_position": [
          {
            "rel_pos": 0.0,
            "max_dev_p50_mm": 120.92,
            "max_dev_p90_mm": 240.1,
            "mean_dev_p50_mm": 77.95,
            "fallback_rate": 0.0
          },
          {
            "rel_pos": 0.15,
            "max_dev_p50_mm": 134.07,
            "max_dev_p90_mm": 235.2,
            "mean_dev_p50_mm": 91.34,
            "fallback_rate": 0.0
          },
          {
            "rel_pos": 0.35,
            "max_dev_p50_mm": 113.65,
            "max_dev_p90_mm": 217.38,
            "mean_dev_p50_mm": 70.26,
            "fallback_rate": 0.0
          },
          {
            "rel_pos": 0.55,
            "max_dev_p50_mm": 111.88,
            "max_dev_p90_mm": 211.2,
            "mean_dev_p50_mm": 65.98,
            "fallback_rate": 0.0
          },
          {
            "rel_pos": 0.75,
            "max_dev_p50_mm": 112.99,
            "max_dev_p90_mm": 199.96,
            "mean_dev_p50_mm": 58.96,
            "fallback_rate": 0.0
          },
          {
            "rel_pos": 0.9,
            "max_dev_p50_mm": 133.81,
            "max_dev_p90_mm": 232.0,
            "mean_dev_p50_mm": 62.07,
            "fallback_rate": 0.0
          }
        ],
        "prefix_recovery": null,
        "positional_entropy": [
          {
            "pos": 0,
            "n": 600,
            "h_marginal": 7.15,
            "h_cond": 7.15
          },
          {
            "pos": 1,
            "n": 600,
            "h_marginal": 6.857,
            "h_cond": 1.489
          },
          {
            "pos": 2,
            "n": 600,
            "h_marginal": 7.595,
            "h_cond": 1.998
          },
          {
            "pos": 3,
            "n": 600,
            "h_marginal": 7.797,
            "h_cond": 1.404
          },
          {
            "pos": 4,
            "n": 600,
            "h_marginal": 8.132,
            "h_cond": 1.326
          },
          {
            "pos": 5,
            "n": 600,
            "h_marginal": 8.024,
            "h_cond": 1.0
          },
          {
            "pos": 6,
            "n": 600,
            "h_marginal": 7.958,
            "h_cond": 1.012
          },
          {
            "pos": 7,
            "n": 600,
            "h_marginal": 7.866,
            "h_cond": 1.021
          },
          {
            "pos": 8,
            "n": 600,
            "h_marginal": 7.815,
            "h_cond": 1.128
          },
          {
            "pos": 9,
            "n": 600,
            "h_marginal": 7.903,
            "h_cond": 1.244
          },
          {
            "pos": 10,
            "n": 600,
            "h_marginal": 8.027,
            "h_cond": 1.212
          },
          {
            "pos": 11,
            "n": 600,
            "h_marginal": 8.1,
            "h_cond": 1.128
          },
          {
            "pos": 12,
            "n": 600,
            "h_marginal": 7.821,
            "h_cond": 0.991
          },
          {
            "pos": 13,
            "n": 600,
            "h_marginal": 7.809,
            "h_cond": 1.209
          },
          {
            "pos": 14,
            "n": 600,
            "h_marginal": 7.828,
            "h_cond": 1.276
          },
          {
            "pos": 15,
            "n": 600,
            "h_marginal": 7.722,
            "h_cond": 1.332
          }
        ],
        "prc_at_32": 0.2184,
        "hero": {
          "clean_xyz_mm": [
            [
              -12.34000015258789,
              2.759999990463257,
              -46.97999954223633
            ],
            [
              -24.579999923706055,
              6.739999771118164,
              -93.06999969482422
            ],
            [
              -34.84000015258789,
              12.739999771118164,
              -136.17999267578125
            ],
            [
              -41.20000076293945,
              21.579999923706055,
              -174.05999755859375
            ],
            [
              -43.43000030517578,
              32.27000045776367,
              -206.19000244140625
            ],
            [
              -43.02000045776367,
              42.779998779296875,
              -233.25
            ],
            [
              -41.38999938964844,
              51.869998931884766,
              -256.5400085449219
            ],
            [
              -39.40999984741211,
              59.439998626708984,
              -276.8399963378906
            ],
            [
              -37.810001373291016,
              64.55000305175781,
              -294.7300109863281
            ],
            [
              -36.5,
              67.5999984741211,
              -309.0400085449219
            ],
            [
              -34.959999084472656,
              69.02999877929688,
              -317.95001220703125
            ],
            [
              -33.09000015258789,
              69.51000213623047,
              -322.5199890136719
            ],
            [
              -31.09000015258789,
              69.30999755859375,
              -323.7799987792969
            ],
            [
              -29.209999084472656,
              68.47000122070312,
              -322.9800109863281
            ],
            [
              -27.479999542236328,
              67.0199966430664,
              -320.489990234375
            ],
            [
              -25.8799991607666,
              65.01000213623047,
              -316.1000061035156
            ],
            [
              -24.489999771118164,
              62.5099983215332,
              -309.8699951171875
            ],
            [
              -23.389999389648438,
              59.650001525878906,
              -302.1400146484375
            ],
            [
              -22.739999771118164,
              56.619998931884766,
              -293.3999938964844
            ],
            [
              -22.579999923706055,
              53.65999984741211,
              -283.9700012207031
            ],
            [
              -22.93000030517578,
              51.09000015258789,
              -273.760009765625
            ],
            [
              -23.770000457763672,
              49.099998474121094,
              -262.2900085449219
            ],
            [
              -24.90999984741211,
              47.68000030517578,
              -248.88999938964844
            ],
            [
              -26.15999984741211,
              46.810001373291016,
              -232.60000610351562
            ],
            [
              -27.420000076293945,
              47.0,
              -211.9199981689453
            ],
            [
              -28.06999969482422,
              49.36000061035156,
              -185.60000610351562
            ],
            [
              -25.93000030517578,
              54.650001525878906,
              -152.0399932861328
            ],
            [
              -16.959999084472656,
              61.880001068115234,
              -111.0
            ],
            [
              1.899999976158142,
              67.87000274658203,
              -67.0
            ],
            [
              29.940000534057617,
              70.36000061035156,
              -23.229999542236328
            ],
            [
              64.25,
              68.77999877929688,
              18.600000381469727
            ],
            [
              102.11000061035156,
              63.810001373291016,
              57.599998474121094
            ]
          ],
          "n_tokens": 16,
          "perturbed": {
            "early": {
              "token_pos": 2,
              "n_tokens": 16,
              "max_dev_mm": 105.39,
              "xyz_mm": [
                [
                  -9.5600004196167,
                  8.369999885559082,
                  -46.95000076293945
                ],
                [
                  -18.739999771118164,
                  19.139999389648438,
                  -92.7699966430664
                ],
                [
                  -25.329999923706055,
                  33.36000061035156,
                  -135.24000549316406
                ],
                [
                  -27.549999237060547,
                  50.75,
                  -172.52999877929688
                ],
                [
                  -25.81999969482422,
                  69.2699966430664,
                  -204.74000549316406
                ],
                [
                  -21.399999618530273,
                  86.52999877929688,
                  -232.67999267578125
                ],
                [
                  -15.770000457763672,
                  101.33999633789062,
                  -257.7799987792969
                ],
                [
                  -10.069999694824219,
                  113.38999938964844,
                  -281.010009765625
                ],
                [
                  -5.730000019073486,
                  122.81999969482422,
                  -303.8500061035156
                ],
                [
                  -3.069999933242798,
                  127.63999938964844,
                  -323.1099853515625
                ],
                [
                  -0.8500000238418579,
                  129.75999450683594,
                  -337.54998779296875
                ],
                [
                  1.4299999475479126,
                  130.30999755859375,
                  -347.4200134277344
                ],
                [
                  3.6600000858306885,
                  129.74000549316406,
                  -353.3299865722656
                ],
                [
                  5.599999904632568,
                  128.19000244140625,
                  -356.44000244140625
                ],
                [
                  7.119999885559082,
                  125.66000366210938,
                  -357.6300048828125
                ],
                [
                  8.220000267028809,
                  122.01000213623047,
                  -357.1499938964844
                ],
                [
                  8.899999618530273,
                  117.33000183105469,
                  -355.0799865722656
                ],
                [
                  9.100000381469727,
                  111.80000305175781,
                  -351.6700134277344
                ],
                [
                  8.720000267028809,
                  105.6500015258789,
                  -347.3399963378906
                ],
                [
                  7.71999979019165,
                  99.2699966430664,
                  -342.3500061035156
                ],
                [
                  6.010000228881836,
                  93.2300033569336,
                  -336.6700134277344
                ],
                [
                  3.5199999809265137,
                  88.05999755859375,
                  -329.95001220703125
                ],
                [
                  0.5299999713897705,
                  84.12999725341797,
                  -321.5799865722656
                ],
                [
                  -2.430000066757202,
                  81.45999908447266,
                  -310.6000061035156
                ],
                [
                  -5.210000038146973,
                  79.76000213623047,
                  -295.7900085449219
                ],
                [
                  -7.659999847412109,
                  79.33000183105469,
                  -275.7799987792969
                ],
                [
                  -8.670000076293945,
                  81.38999938964844,
                  -248.63999938964844
                ],
                [
                  -5.309999942779541,
                  86.04000091552734,
                  -212.58999633789062
                ],
                [
                  6.199999809265137,
                  91.25,
                  -169.6699981689453
                ],
                [
                  27.65999984741211,
                  94.44999694824219,
                  -125.1500015258789
                ],
                [
                  56.869998931884766,
                  94.25,
                  -82.06999969482422
                ],
                [
                  90.62000274658203,
                  91.12999725341797,
                  -41.81999969482422
                ]
              ]
            },
            "mid": {
              "token_pos": 7,
              "n_tokens": 16,
              "max_dev_mm": 89.4,
              "xyz_mm": [
                [
                  -14.390000343322754,
                  1.1399999856948853,
                  -47.0099983215332
                ],
                [
                  -28.469999313354492,
                  2.5999999046325684,
                  -93.25
                ],
                [
                  -40.470001220703125,
                  4.429999828338623,
                  -136.47000122070312
                ],
                [
                  -49.189998626708984,
                  6.769999980926514,
                  -174.57000732421875
                ],
                [
                  -53.7400016784668,
                  9.579999923706055,
                  -206.85000610351562
                ],
                [
                  -55.29999923706055,
                  12.039999961853027,
                  -234.24000549316406
                ],
                [
                  -55.5099983215332,
                  13.300000190734863,
                  -258.04998779296875
                ],
                [
                  -55.29999923706055,
                  13.34000015258789,
                  -279.239990234375
                ],
                [
                  -55.25,
                  12.09000015258789,
                  -297.80999755859375
                ],
                [
                  -55.9900016784668,
                  9.6899995803833,
                  -316.0199890136719
                ],
                [
                  -56.15999984741211,
                  7.550000190734863,
                  -329.29998779296875
                ],
                [
                  -55.970001220703125,
                  5.320000171661377,
                  -337.489990234375
                ],
                [
                  -55.43000030517578,
                  2.9700000286102295,
                  -341.6099853515625
                ],
                [
                  -54.70000076293945,
                  0.4000000059604645,
                  -342.92999267578125
                ],
                [
                  -53.88999938964844,
                  -2.5999999046325684,
                  -342.29998779296875
                ],
                [
                  -53.09000015258789,
                  -6.199999809265137,
                  -339.6000061035156
                ],
                [
                  -52.38999938964844,
                  -10.3100004196167,
                  -334.9100036621094
                ],
                [
                  -51.939998626708984,
                  -14.65999984741211,
                  -328.6300048828125
                ],
                [
                  -51.849998474121094,
                  -19.049999237060547,
                  -321.239990234375
                ],
                [
                  -52.16999816894531,
                  -23.209999084472656,
                  -313.0
                ],
                [
                  -52.90999984741211,
                  -26.690000534057617,
                  -303.7799987792969
                ],
                [
                  -53.9900016784668,
                  -29.110000610351562,
                  -293.04998779296875
                ],
                [
                  -55.25,
                  -30.43000030517578,
                  -280.05999755859375
                ],
                [
                  -56.560001373291016,
                  -30.780000686645508,
                  -263.7099914550781
                ],
                [
                  -57.779998779296875,
                  -29.389999389648438,
                  -242.50999450683594
                ],
                [
                  -58.040000915527344,
                  -25.239999771118164,
                  -215.35000610351562
                ],
                [
                  -54.7400016784668,
                  -18.1200008392334,
                  -180.92999267578125
                ],
                [
                  -44.09000015258789,
                  -9.65999984741211,
                  -139.85000610351562
                ],
                [
                  -24.100000381469727,
                  -2.859999895095825,
                  -96.25
                ],
                [
                  4.739999771118164,
                  0.15000000596046448,
                  -52.900001525878906
                ],
                [
                  39.97999954223633,
                  -1.090000033378601,
                  -11.289999961853027
                ],
                [
                  78.91000366210938,
                  -5.619999885559082,
                  27.889999389648438
                ]
              ]
            },
            "late": {
              "token_pos": 13,
              "n_tokens": 16,
              "max_dev_mm": 82.77,
              "xyz_mm": [
                [
                  -14.1899995803833,
                  1.850000023841858,
                  -46.7400016784668
                ],
                [
                  -29.3700008392334,
                  4.400000095367432,
                  -92.95999908447266
                ],
                [
                  -44.33000183105469,
                  8.0600004196167,
                  -137.5
                ],
                [
                  -57.790000915527344,
                  13.359999656677246,
                  -178.49000549316406
                ],
                [
                  -67.8499984741211,
                  20.149999618530273,
                  -214.30999755859375
                ],
                [
                  -74.0,
                  27.18000030517578,
                  -244.27000427246094
                ],
                [
                  -77.01000213623047,
                  32.939998626708984,
                  -268.6099853515625
                ],
                [
                  -78.22000122070312,
                  37.189998626708984,
                  -288.2900085449219
                ],
                [
                  -78.83999633789062,
                  39.400001525878906,
                  -303.92999267578125
                ],
                [
                  -79.19999694824219,
                  40.4900016784668,
                  -314.80999755859375
                ],
                [
                  -78.63999938964844,
                  41.150001525878906,
                  -320.1400146484375
                ],
                [
                  -77.61000061035156,
                  41.72999954223633,
                  -321.4700012207031
                ],
                [
                  -76.33999633789062,
                  42.2599983215332,
                  -320.30999755859375
                ],
                [
                  -75.01000213623047,
                  42.599998474121094,
                  -317.5799865722656
                ],
                [
                  -73.68000030517578,
                  42.59000015258789,
                  -313.1700134277344
                ],
                [
                  -72.33999633789062,
                  42.119998931884766,
                  -306.6700134277344
                ],
                [
                  -71.0,
                  41.290000915527344,
                  -297.9800109863281
                ],
                [
                  -69.69000244140625,
                  40.310001373291016,
                  -287.2799987792969
                ],
                [
                  -68.5199966430664,
                  39.349998474121094,
                  -274.8599853515625
                ],
                [
                  -67.58999633789062,
                  38.63999938964844,
                  -260.95001220703125
                ],
                [
                  -66.94999694824219,
                  38.380001068115234,
                  -245.61000061035156
                ],
                [
                  -66.58000183105469,
                  38.630001068115234,
                  -228.52000427246094
                ],
                [
                  -66.20999908447266,
                  39.560001373291016,
                  -208.8300018310547
                ],
                [
                  -65.44999694824219,
                  41.72999954223633,
                  -185.02000427246094
                ],
                [
                  -63.45000076293945,
                  46.09000015258789,
                  -155.4499969482422
                ],
                [
                  -58.68000030517578,
                  53.20000076293945,
                  -119.41000366210938
                ],
                [
                  -48.83000183105469,
                  62.70000076293945,
                  -77.05999755859375
                ],
                [
                  -31.760000228881836,
                  72.23999786376953,
                  -31.940000534057617
                ],
                [
                  -6.869999885559082,
                  79.30999755859375,
                  13.319999694824219
                ],
                [
                  24.940000534057617,
                  82.44999694824219,
                  57.470001220703125
                ],
                [
                  61.52000045776367,
                  81.31999969482422,
                  99.5999984741211
                ],
                [
                  100.7300033569336,
                  76.41000366210938,
                  139.38999938964844
                ]
              ]
            }
          }
        }
      },
      "Cover (EEF)": {
        "codec_name": "cover_eef",
        "vocab_size": 1024,
        "tokens_per_window_mean": 50.25,
        "tokens_per_window_p95": 64.0,
        "recon_mse_e3": 2.604,
        "recon_pos_mae_mm": 4.73,
        "recon_pos_p99_mm": 7.55,
        "recon_pos_max_mm": 8.58,
        "single_tok_dev_p50_mm": 643.38,
        "single_tok_dev_p90_mm": 1298.5,
        "single_tok_dev_p99_mm": 1432.97,
        "single_tok_fallback_rate": 0.7267,
        "perturbation_by_position": [
          {
            "rel_pos": 0.0,
            "max_dev_p50_mm": 847.67,
            "max_dev_p90_mm": 1316.83,
            "mean_dev_p50_mm": 493.57,
            "fallback_rate": 0.98
          },
          {
            "rel_pos": 0.15,
            "max_dev_p50_mm": 458.45,
            "max_dev_p90_mm": 1277.6,
            "mean_dev_p50_mm": 303.37,
            "fallback_rate": 0.596
          },
          {
            "rel_pos": 0.35,
            "max_dev_p50_mm": 574.97,
            "max_dev_p90_mm": 1276.35,
            "mean_dev_p50_mm": 369.09,
            "fallback_rate": 0.668
          },
          {
            "rel_pos": 0.55,
            "max_dev_p50_mm": 629.64,
            "max_dev_p90_mm": 1279.42,
            "mean_dev_p50_mm": 384.87,
            "fallback_rate": 0.7
          },
          {
            "rel_pos": 0.75,
            "max_dev_p50_mm": 647.92,
            "max_dev_p90_mm": 1294.45,
            "mean_dev_p50_mm": 400.77,
            "fallback_rate": 0.724
          },
          {
            "rel_pos": 0.9,
            "max_dev_p50_mm": 624.06,
            "max_dev_p90_mm": 1313.45,
            "mean_dev_p50_mm": 380.28,
            "fallback_rate": 0.692
          }
        ],
        "prefix_recovery": [
          {
            "rel_pos": 0.15,
            "p50_mm": 780.05
          },
          {
            "rel_pos": 0.5,
            "p50_mm": 529.95
          },
          {
            "rel_pos": 0.85,
            "p50_mm": 168.67
          }
        ],
        "positional_entropy": [
          {
            "pos": 0,
            "n": 600,
            "h_marginal": 3.318,
            "h_cond": 3.318
          },
          {
            "pos": 1,
            "n": 600,
            "h_marginal": 8.473,
            "h_cond": 5.657
          },
          {
            "pos": 2,
            "n": 600,
            "h_marginal": 8.456,
            "h_cond": 0.706
          },
          {
            "pos": 3,
            "n": 600,
            "h_marginal": 8.555,
            "h_cond": 0.748
          },
          {
            "pos": 4,
            "n": 600,
            "h_marginal": 8.599,
            "h_cond": 0.65
          },
          {
            "pos": 5,
            "n": 600,
            "h_marginal": 8.672,
            "h_cond": 0.615
          },
          {
            "pos": 6,
            "n": 600,
            "h_marginal": 8.642,
            "h_cond": 0.544
          },
          {
            "pos": 7,
            "n": 600,
            "h_marginal": 8.659,
            "h_cond": 0.581
          },
          {
            "pos": 8,
            "n": 600,
            "h_marginal": 8.632,
            "h_cond": 0.56
          },
          {
            "pos": 9,
            "n": 600,
            "h_marginal": 8.534,
            "h_cond": 0.572
          },
          {
            "pos": 10,
            "n": 600,
            "h_marginal": 8.65,
            "h_cond": 0.691
          },
          {
            "pos": 11,
            "n": 600,
            "h_marginal": 8.625,
            "h_cond": 0.576
          },
          {
            "pos": 12,
            "n": 600,
            "h_marginal": 8.61,
            "h_cond": 0.6
          },
          {
            "pos": 13,
            "n": 600,
            "h_marginal": 8.706,
            "h_cond": 0.609
          },
          {
            "pos": 14,
            "n": 600,
            "h_marginal": 8.661,
            "h_cond": 0.513
          },
          {
            "pos": 15,
            "n": 600,
            "h_marginal": 8.648,
            "h_cond": 0.561
          },
          {
            "pos": 16,
            "n": 600,
            "h_marginal": 8.661,
            "h_cond": 0.569
          },
          {
            "pos": 17,
            "n": 600,
            "h_marginal": 8.667,
            "h_cond": 0.558
          },
          {
            "pos": 18,
            "n": 600,
            "h_marginal": 8.68,
            "h_cond": 0.551
          },
          {
            "pos": 19,
            "n": 600,
            "h_marginal": 8.651,
            "h_cond": 0.543
          },
          {
            "pos": 20,
            "n": 600,
            "h_marginal": 8.744,
            "h_cond": 0.578
          },
          {
            "pos": 21,
            "n": 600,
            "h_marginal": 8.725,
            "h_cond": 0.481
          },
          {
            "pos": 22,
            "n": 600,
            "h_marginal": 8.637,
            "h_cond": 0.501
          },
          {
            "pos": 23,
            "n": 600,
            "h_marginal": 8.681,
            "h_cond": 0.586
          },
          {
            "pos": 24,
            "n": 600,
            "h_marginal": 8.688,
            "h_cond": 0.541
          },
          {
            "pos": 25,
            "n": 600,
            "h_marginal": 8.709,
            "h_cond": 0.537
          },
          {
            "pos": 26,
            "n": 600,
            "h_marginal": 8.7,
            "h_cond": 0.51
          },
          {
            "pos": 27,
            "n": 599,
            "h_marginal": 8.689,
            "h_cond": 0.523
          },
          {
            "pos": 28,
            "n": 599,
            "h_marginal": 8.722,
            "h_cond": 0.538
          },
          {
            "pos": 29,
            "n": 597,
            "h_marginal": 8.647,
            "h_cond": 0.499
          },
          {
            "pos": 30,
            "n": 595,
            "h_marginal": 8.696,
            "h_cond": 0.563
          },
          {
            "pos": 31,
            "n": 591,
            "h_marginal": 8.67,
            "h_cond": 0.513
          },
          {
            "pos": 32,
            "n": 589,
            "h_marginal": 8.672,
            "h_cond": 0.528
          },
          {
            "pos": 33,
            "n": 586,
            "h_marginal": 8.673,
            "h_cond": 0.515
          },
          {
            "pos": 34,
            "n": 576,
            "h_marginal": 8.611,
            "h_cond": 0.524
          },
          {
            "pos": 35,
            "n": 571,
            "h_marginal": 8.687,
            "h_cond": 0.553
          },
          {
            "pos": 36,
            "n": 566,
            "h_marginal": 8.604,
            "h_cond": 0.457
          },
          {
            "pos": 37,
            "n": 559,
            "h_marginal": 8.594,
            "h_cond": 0.525
          },
          {
            "pos": 38,
            "n": 546,
            "h_marginal": 8.511,
            "h_cond": 0.516
          },
          {
            "pos": 39,
            "n": 529,
            "h_marginal": 8.561,
            "h_cond": 0.55
          },
          {
            "pos": 40,
            "n": 511,
            "h_marginal": 8.548,
            "h_cond": 0.461
          },
          {
            "pos": 41,
            "n": 499,
            "h_marginal": 8.476,
            "h_cond": 0.441
          },
          {
            "pos": 42,
            "n": 482,
            "h_marginal": 8.429,
            "h_cond": 0.459
          },
          {
            "pos": 43,
            "n": 469,
            "h_marginal": 8.352,
            "h_cond": 0.46
          },
          {
            "pos": 44,
            "n": 450,
            "h_marginal": 8.371,
            "h_cond": 0.502
          },
          {
            "pos": 45,
            "n": 429,
            "h_marginal": 8.259,
            "h_cond": 0.406
          },
          {
            "pos": 46,
            "n": 403,
            "h_marginal": 8.275,
            "h_cond": 0.437
          },
          {
            "pos": 47,
            "n": 378,
            "h_marginal": 8.131,
            "h_cond": 0.329
          }
        ],
        "prc_at_32": 0.2651,
        "hero": {
          "clean_xyz_mm": [
            [
              -10.0,
              0.0,
              -50.0
            ],
            [
              -20.0,
              0.0,
              -90.0
            ],
            [
              -30.0,
              0.0,
              -140.0
            ],
            [
              -30.0,
              20.0,
              -180.0
            ],
            [
              -40.0,
              30.0,
              -220.0
            ],
            [
              -40.0,
              40.0,
              -250.0
            ],
            [
              -40.0,
              50.0,
              -280.0
            ],
            [
              -40.0,
              60.0,
              -300.0
            ],
            [
              -40.0,
              60.0,
              -330.0
            ],
            [
              -40.0,
              70.0,
              -350.0
            ],
            [
              -40.0,
              70.0,
              -360.0
            ],
            [
              -40.0,
              70.0,
              -370.0
            ],
            [
              -40.0,
              80.0,
              -380.0
            ],
            [
              -40.0,
              80.0,
              -380.0
            ],
            [
              -40.0,
              80.0,
              -380.0
            ],
            [
              -40.0,
              80.0,
              -380.0
            ],
            [
              -40.0,
              80.0,
              -370.0
            ],
            [
              -40.0,
              80.0,
              -360.0
            ],
            [
              -40.0,
              80.0,
              -350.0
            ],
            [
              -40.0,
              80.0,
              -340.0
            ],
            [
              -40.0,
              80.0,
              -330.0
            ],
            [
              -40.0,
              80.0,
              -330.0
            ],
            [
              -40.0,
              80.0,
              -320.0
            ],
            [
              -40.0,
              80.0,
              -310.0
            ],
            [
              -40.0,
              80.0,
              -290.0
            ],
            [
              -40.0,
              80.0,
              -260.0
            ],
            [
              -40.0,
              90.0,
              -230.0
            ],
            [
              -30.0,
              100.0,
              -190.0
            ],
            [
              -10.0,
              110.0,
              -140.0
            ],
            [
              10.0,
              110.0,
              -90.0
            ],
            [
              40.0,
              110.0,
              -50.0
            ],
            [
              80.0,
              100.0,
              -10.0
            ]
          ],
          "n_tokens": 48,
          "perturbed": {
            "early": {
              "token_pos": 5,
              "n_tokens": 48,
              "max_dev_mm": 390.38,
              "xyz_mm": [
                [
                  0.0,
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0,
                  0.0
                ]
              ]
            },
            "mid": {
              "token_pos": 21,
              "n_tokens": 48,
              "max_dev_mm": 31.62,
              "xyz_mm": [
                [
                  -10.0,
                  0.0,
                  -50.0
                ],
                [
                  -20.0,
                  0.0,
                  -90.0
                ],
                [
                  -30.0,
                  0.0,
                  -140.0
                ],
                [
                  -30.0,
                  20.0,
                  -180.0
                ],
                [
                  -40.0,
                  30.0,
                  -220.0
                ],
                [
                  -40.0,
                  40.0,
                  -250.0
                ],
                [
                  -40.0,
                  50.0,
                  -280.0
                ],
                [
                  -40.0,
                  60.0,
                  -300.0
                ],
                [
                  -40.0,
                  60.0,
                  -330.0
                ],
                [
                  -40.0,
                  70.0,
                  -350.0
                ],
                [
                  -40.0,
                  70.0,
                  -360.0
                ],
                [
                  -40.0,
                  70.0,
                  -370.0
                ],
                [
                  -40.0,
                  80.0,
                  -380.0
                ],
                [
                  -40.0,
                  80.0,
                  -380.0
                ],
                [
                  -50.0,
                  80.0,
                  -410.0
                ],
                [
                  -50.0,
                  80.0,
                  -410.0
                ],
                [
                  -50.0,
                  80.0,
                  -400.0
                ],
                [
                  -50.0,
                  80.0,
                  -390.0
                ],
                [
                  -50.0,
                  80.0,
                  -380.0
                ],
                [
                  -50.0,
                  80.0,
                  -370.0
                ],
                [
                  -50.0,
                  80.0,
                  -360.0
                ],
                [
                  -50.0,
                  80.0,
                  -360.0
                ],
                [
                  -50.0,
                  80.0,
                  -350.0
                ],
                [
                  -50.0,
                  80.0,
                  -340.0
                ],
                [
                  -50.0,
                  80.0,
                  -320.0
                ],
                [
                  -50.0,
                  80.0,
                  -290.0
                ],
                [
                  -50.0,
                  90.0,
                  -260.0
                ],
                [
                  -40.0,
                  100.0,
                  -220.0
                ],
                [
                  -20.0,
                  110.0,
                  -170.0
                ],
                [
                  0.0,
                  110.0,
                  -120.0
                ],
                [
                  30.0,
                  110.0,
                  -80.0
                ],
                [
                  70.0,
                  100.0,
                  -40.0
                ]
              ]
            },
            "late": {
              "token_pos": 40,
              "n_tokens": 48,
              "max_dev_mm": 390.38,
              "xyz_mm": [
                [
                  0.0,
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0,
                  0.0
                ]
              ]
            }
          }
        }
      }
    },
    "hero_trajectory": {
      "gt_xyz_mm": [
        [
          -8.170000076293945,
          0.0,
          -46.880001068115234
        ],
        [
          -17.280000686645508,
          0.0,
          -93.75
        ],
        [
          -26.3799991607666,
          4.150000095367432,
          -140.6199951171875
        ],
        [
          -33.619998931884766,
          15.270000457763672,
          -181.61000061035156
        ],
        [
          -35.88999938964844,
          29.329999923706055,
          -217.3699951171875
        ],
        [
          -35.88999938964844,
          41.52000045776367,
          -248.57000732421875
        ],
        [
          -35.88999938964844,
          50.4900016784668,
          -277.1000061035156
        ],
        [
          -35.88999938964844,
          57.04999923706055,
          -302.95001220703125
        ],
        [
          -35.88999938964844,
          61.7400016784668,
          -325.7099914550781
        ],
        [
          -35.88999938964844,
          66.29000091552734,
          -345.3999938964844
        ],
        [
          -35.88999938964844,
          70.58000183105469,
          -360.1300048828125
        ],
        [
          -35.88999938964844,
          74.87000274658203,
          -370.30999755859375
        ],
        [
          -35.88999938964844,
          77.54000091552734,
          -375.94000244140625
        ],
        [
          -35.88999938964844,
          78.62000274658203,
          -377.4100036621094
        ],
        [
          -35.88999938964844,
          78.62000274658203,
          -377.4100036621094
        ],
        [
          -35.88999938964844,
          78.62000274658203,
          -376.4700012207031
        ],
        [
          -35.88999938964844,
          78.62000274658203,
          -371.9200134277344
        ],
        [
          -35.88999938964844,
          77.94999694824219,
          -363.6199951171875
        ],
        [
          -35.88999938964844,
          77.94999694824219,
          -353.7099914550781
        ],
        [
          -35.88999938964844,
          77.80999755859375,
          -342.7200012207031
        ],
        [
          -35.88999938964844,
          77.68000030517578,
          -333.2099914550781
        ],
        [
          -35.88999938964844,
          77.68000030517578,
          -325.45001220703125
        ],
        [
          -35.88999938964844,
          77.68000030517578,
          -317.5400085449219
        ],
        [
          -35.88999938964844,
          77.68000030517578,
          -306.8299865722656
        ],
        [
          -35.88999938964844,
          79.0199966430664,
          -288.0799865722656
        ],
        [
          -35.88999938964844,
          83.70999908447266,
          -260.6199951171875
        ],
        [
          -35.88999938964844,
          90.12999725341797,
          -227.5399932861328
        ],
        [
          -30.270000457763672,
          98.30000305175781,
          -185.75999450683594
        ],
        [
          -14.600000381469727,
          107.01000213623047,
          -141.2899932861328
        ],
        [
          9.90999984741211,
          109.55000305175781,
          -94.41999816894531
        ],
        [
          42.459999084472656,
          109.55000305175781,
          -49.290000915527344
        ],
        [
          79.95999908447266,
          101.25,
          -14.199999809265137
        ]
      ]
    },
    "train_curves": {
      "cover_eef_lib": [
        {
          "step": 2000,
          "val_ce": 3.6486,
          "train_ce": 3.6942,
          "val_reconst": 0.16746
        },
        {
          "step": 4000,
          "val_ce": 3.3465,
          "train_ce": 3.3091,
          "val_reconst": 0.10316
        },
        {
          "step": 6000,
          "val_ce": 3.2482,
          "train_ce": 3.1052,
          "val_reconst": 0.08475
        },
        {
          "step": 8000,
          "val_ce": 3.1818,
          "train_ce": 3.0018,
          "val_reconst": 0.06293
        },
        {
          "step": 10000,
          "val_ce": 3.1855,
          "train_ce": 2.9327,
          "val_reconst": 0.06563
        },
        {
          "step": 12000,
          "val_ce": 3.1705,
          "train_ce": 2.8014,
          "val_reconst": 0.0616
        },
        {
          "step": 14000,
          "val_ce": 3.2484,
          "train_ce": 2.544,
          "val_reconst": 0.06051
        },
        {
          "step": 16000,
          "val_ce": 3.2906,
          "train_ce": 2.5078,
          "val_reconst": 0.05384
        },
        {
          "step": 18000,
          "val_ce": 3.3341,
          "train_ce": 2.4708,
          "val_reconst": 0.0553
        },
        {
          "step": 20000,
          "val_ce": 3.3669,
          "train_ce": 2.4078,
          "val_reconst": 0.05668
        },
        {
          "step": 22000,
          "val_ce": 3.379,
          "train_ce": 2.4145,
          "val_reconst": 0.05576
        },
        {
          "step": 24000,
          "val_ce": 3.3869,
          "train_ce": 2.4082,
          "val_reconst": 0.05641
        },
        {
          "step": 26000,
          "val_ce": 3.3919,
          "train_ce": 2.4015,
          "val_reconst": 0.05508
        },
        {
          "step": 28000,
          "val_ce": 3.4651,
          "train_ce": 2.2595,
          "val_reconst": 0.05578
        },
        {
          "step": 30000,
          "val_ce": 3.4672,
          "train_ce": 2.2801,
          "val_reconst": 0.0554
        }
      ],
      "fast_eef": [
        {
          "step": 2000,
          "val_ce": 2.8902,
          "train_ce": 2.8435,
          "val_reconst": 0.08245
        },
        {
          "step": 4000,
          "val_ce": 2.6162,
          "train_ce": 2.5271,
          "val_reconst": 0.06689
        },
        {
          "step": 6000,
          "val_ce": 2.5091,
          "train_ce": 2.417,
          "val_reconst": 0.06125
        },
        {
          "step": 8000,
          "val_ce": 2.4537,
          "train_ce": 2.3449,
          "val_reconst": 0.06078
        },
        {
          "step": 10000,
          "val_ce": 2.4197,
          "train_ce": 2.2879,
          "val_reconst": 0.05374
        },
        {
          "step": 12000,
          "val_ce": 2.4061,
          "train_ce": 2.2517,
          "val_reconst": 0.05362
        },
        {
          "step": 14000,
          "val_ce": 2.4432,
          "train_ce": 2.1006,
          "val_reconst": 0.05221
        },
        {
          "step": 16000,
          "val_ce": 2.4719,
          "train_ce": 2.0857,
          "val_reconst": 0.05238
        },
        {
          "step": 18000,
          "val_ce": 2.4837,
          "train_ce": 2.0329,
          "val_reconst": 0.05433
        },
        {
          "step": 20000,
          "val_ce": 2.4943,
          "train_ce": 2.0201,
          "val_reconst": 0.05348
        },
        {
          "step": 22000,
          "val_ce": 2.5066,
          "train_ce": 2.0015,
          "val_reconst": 0.05163
        },
        {
          "step": 24000,
          "val_ce": 2.5159,
          "train_ce": 2.0132,
          "val_reconst": 0.05478
        },
        {
          "step": 26000,
          "val_ce": 2.5148,
          "train_ce": 2.018,
          "val_reconst": 0.05348
        },
        {
          "step": 28000,
          "val_ce": 2.5718,
          "train_ce": 1.8798,
          "val_reconst": 0.05487
        },
        {
          "step": 30000,
          "val_ce": 2.5733,
          "train_ce": 1.9132,
          "val_reconst": 0.05451
        }
      ],
      "bin256_eef": [
        {
          "step": 2000,
          "val_ce": 1.6179,
          "train_ce": 1.5962,
          "val_reconst": 0.17821
        },
        {
          "step": 4000,
          "val_ce": 2.3227,
          "train_ce": 0.6162,
          "val_reconst": 0.12817
        },
        {
          "step": 6000,
          "val_ce": 3.0068,
          "train_ce": 0.2418,
          "val_reconst": 0.12347
        },
        {
          "step": 8000,
          "val_ce": 3.3559,
          "train_ce": 0.198,
          "val_reconst": 0.12142
        },
        {
          "step": 10000,
          "val_ce": 3.5208,
          "train_ce": 0.1831,
          "val_reconst": 0.12354
        },
        {
          "step": 12000,
          "val_ce": 3.5749,
          "train_ce": 0.1663,
          "val_reconst": 0.11641
        },
        {
          "step": 14000,
          "val_ce": 3.7657,
          "train_ce": 0.1414,
          "val_reconst": 0.11357
        },
        {
          "step": 16000,
          "val_ce": 3.7601,
          "train_ce": 0.139,
          "val_reconst": 0.10748
        },
        {
          "step": 18000,
          "val_ce": 3.7627,
          "train_ce": 0.1365,
          "val_reconst": 0.11773
        },
        {
          "step": 20000,
          "val_ce": 3.7804,
          "train_ce": 0.128,
          "val_reconst": 0.11207
        },
        {
          "step": 22000,
          "val_ce": 3.7835,
          "train_ce": 0.1279,
          "val_reconst": 0.11236
        },
        {
          "step": 24000,
          "val_ce": 3.7843,
          "train_ce": 0.1281,
          "val_reconst": 0.10472
        },
        {
          "step": 26000,
          "val_ce": 3.7871,
          "train_ce": 0.1301,
          "val_reconst": 0.10602
        },
        {
          "step": 28000,
          "val_ce": 3.8253,
          "train_ce": 0.1152,
          "val_reconst": 0.10378
        },
        {
          "step": 30000,
          "val_ce": 3.8227,
          "train_ce": 0.1139,
          "val_reconst": 0.10363
        }
      ],
      "oat_joint": [
        {
          "step": 2000,
          "val_ce": 3.1737,
          "train_ce": 3.0418,
          "val_reconst": 0.07685
        },
        {
          "step": 4000,
          "val_ce": 2.4094,
          "train_ce": 2.3256,
          "val_reconst": 0.05833
        },
        {
          "step": 6000,
          "val_ce": 2.1757,
          "train_ce": 2.0143,
          "val_reconst": 0.04769
        },
        {
          "step": 8000,
          "val_ce": 2.0467,
          "train_ce": 1.8014,
          "val_reconst": 0.05142
        },
        {
          "step": 10000,
          "val_ce": 1.9902,
          "train_ce": 1.6761,
          "val_reconst": 0.0488
        },
        {
          "step": 12000,
          "val_ce": 1.9367,
          "train_ce": 1.5165,
          "val_reconst": 0.0456
        },
        {
          "step": 14000,
          "val_ce": 1.9723,
          "train_ce": 1.2359,
          "val_reconst": 0.04365
        },
        {
          "step": 16000,
          "val_ce": 1.9435,
          "train_ce": 1.1636,
          "val_reconst": 0.04401
        },
        {
          "step": 18000,
          "val_ce": 1.9155,
          "train_ce": 1.1089,
          "val_reconst": 0.04546
        },
        {
          "step": 20000,
          "val_ce": 1.9216,
          "train_ce": 1.0818,
          "val_reconst": 0.04317
        },
        {
          "step": 22000,
          "val_ce": 1.9164,
          "train_ce": 1.0381,
          "val_reconst": 0.04302
        },
        {
          "step": 24000,
          "val_ce": 1.9163,
          "train_ce": 1.0431,
          "val_reconst": 0.04344
        },
        {
          "step": 26000,
          "val_ce": 1.9124,
          "train_ce": 1.0399,
          "val_reconst": 0.043
        },
        {
          "step": 28000,
          "val_ce": 1.9475,
          "train_ce": 0.8949,
          "val_reconst": 0.04337
        },
        {
          "step": 30000,
          "val_ce": 1.952,
          "train_ce": 0.8633,
          "val_reconst": 0.04309
        }
      ],
      "cover_h32_joint": [
        {
          "step": 2000,
          "val_ce": 4.1924,
          "train_ce": 4.2008,
          "val_reconst": 0.1111
        },
        {
          "step": 4000,
          "val_ce": 3.7155,
          "train_ce": 3.7195,
          "val_reconst": 0.07959
        },
        {
          "step": 6000,
          "val_ce": 3.4997,
          "train_ce": 3.5162,
          "val_reconst": 0.06798
        },
        {
          "step": 8000,
          "val_ce": 3.3648,
          "train_ce": 3.2981,
          "val_reconst": 0.06254
        },
        {
          "step": 10000,
          "val_ce": 3.2849,
          "train_ce": 3.1767,
          "val_reconst": 0.05558
        },
        {
          "step": 12000,
          "val_ce": 3.2158,
          "train_ce": 3.0634,
          "val_reconst": 0.05899
        },
        {
          "step": 14000,
          "val_ce": 3.2372,
          "train_ce": 2.7828,
          "val_reconst": 0.04628
        },
        {
          "step": 16000,
          "val_ce": 3.2413,
          "train_ce": 2.7535,
          "val_reconst": 0.05026
        },
        {
          "step": 18000,
          "val_ce": 3.2514,
          "train_ce": 2.6765,
          "val_reconst": 0.04913
        },
        {
          "step": 20000,
          "val_ce": 3.2526,
          "train_ce": 2.7116,
          "val_reconst": 0.04659
        },
        {
          "step": 22000,
          "val_ce": 3.2597,
          "train_ce": 2.6938,
          "val_reconst": 0.0465
        },
        {
          "step": 24000,
          "val_ce": 3.256,
          "train_ce": 2.6191,
          "val_reconst": 0.04611
        },
        {
          "step": 26000,
          "val_ce": 3.2605,
          "train_ce": 2.6476,
          "val_reconst": 0.04561
        },
        {
          "step": 28000,
          "val_ce": 3.3185,
          "train_ce": 2.5033,
          "val_reconst": 0.04556
        },
        {
          "step": 30000,
          "val_ce": 3.328,
          "train_ce": 2.4811,
          "val_reconst": 0.04569
        }
      ],
      "holo_joint": [
        {
          "step": 2000,
          "val_ce": 1.3508,
          "train_ce": 1.3485,
          "val_reconst": 0.21021
        },
        {
          "step": 4000,
          "val_ce": 1.236,
          "train_ce": 1.1528,
          "val_reconst": 0.17499
        },
        {
          "step": 6000,
          "val_ce": 1.2609,
          "train_ce": 1.0083,
          "val_reconst": 0.15632
        },
        {
          "step": 8000,
          "val_ce": 1.2853,
          "train_ce": 0.928,
          "val_reconst": 0.13152
        },
        {
          "step": 10000,
          "val_ce": 1.3853,
          "train_ce": 0.7301,
          "val_reconst": 0.10918
        },
        {
          "step": 12000,
          "val_ce": 1.4525,
          "train_ce": 0.6705,
          "val_reconst": 0.09988
        },
        {
          "step": 14000,
          "val_ce": 1.5215,
          "train_ce": 0.6132,
          "val_reconst": 0.09938
        },
        {
          "step": 16000,
          "val_ce": 1.5742,
          "train_ce": 0.5666,
          "val_reconst": 0.0936
        },
        {
          "step": 18000,
          "val_ce": 1.6249,
          "train_ce": 0.5387,
          "val_reconst": 0.09263
        },
        {
          "step": 20000,
          "val_ce": 1.7423,
          "train_ce": 0.3698,
          "val_reconst": 0.09188
        },
        {
          "step": 22000,
          "val_ce": 1.803,
          "train_ce": 0.3621,
          "val_reconst": 0.0923
        },
        {
          "step": 24000,
          "val_ce": 1.8181,
          "train_ce": 0.3641,
          "val_reconst": 0.08998
        },
        {
          "step": 26000,
          "val_ce": 1.8239,
          "train_ce": 0.3542,
          "val_reconst": 0.09133
        },
        {
          "step": 28000,
          "val_ce": 1.8279,
          "train_ce": 0.349,
          "val_reconst": 0.09041
        },
        {
          "step": 30000,
          "val_ce": 1.8352,
          "train_ce": 0.3178,
          "val_reconst": 0.09231
        }
      ]
    },
    "elapsed_sec": 6.22
  },
  "exp2c": {
    "ema_dev_eval": {
      "ema_step16000": {
        "libero_goal": {
          "success_rate": 0.55,
          "n_episodes": 100
        }
      },
      "ema_step26000": {
        "libero_goal": {
          "success_rate": 0.65,
          "n_episodes": 100
        }
      }
    },
    "pass_at_k": {
      "ema_step16000": {
        "n_init_pairs": 30,
        "n_samples": 8,
        "curve": {
          "pass@1": 0.5625,
          "pass@2": 0.7643,
          "pass@4": 0.8952,
          "pass@8": 0.9333
        },
        "per_seed_sr": [
          0.5333,
          0.4667,
          0.5,
          0.6333,
          0.5333,
          0.6667,
          0.6667,
          0.5
        ]
      },
      "ema_step30000": {
        "n_init_pairs": 30,
        "n_samples": 4,
        "curve": {
          "pass@1": 0.6167,
          "pass@2": 0.8278,
          "pass@4": 0.9333
        },
        "per_seed_sr": [
          0.6667,
          0.6,
          0.4333,
          0.7667
        ]
      },
      "raw_step30000": {
        "n_init_pairs": 30,
        "n_samples": 6,
        "curve": {
          "pass@1": 0.5556,
          "pass@2": 0.7222,
          "pass@4": 0.84
        },
        "per_seed_sr": [
          0.5667,
          0.5667,
          0.5667,
          0.6333,
          0.5333,
          0.4667
        ]
      }
    }
  },
  "exp2d": {
    "suites": {
      "libero_goal": {
        "n_episodes": 100,
        "success_rate": 0.59,
        "failure_counts": {
          "contact_stall_object": 15,
          "late_subgoal_timeout": 8,
          "never_grasped": 8,
          "repeated_grasp_slip": 9,
          "stagnation_freeze": 1
        },
        "decode_stats": {},
        "per_task": {
          "task_0": {
            "ok": 7,
            "fail": 3,
            "fail_cats": {
              "never_grasped": 3
            },
            "median_contact_stall_steps_on_fail": 0.0
          },
          "task_1": {
            "ok": 7,
            "fail": 3,
            "fail_cats": {
              "contact_stall_object": 2,
              "repeated_grasp_slip": 1
            },
            "median_contact_stall_steps_on_fail": 127.0
          },
          "task_2": {
            "ok": 7,
            "fail": 3,
            "fail_cats": {
              "repeated_grasp_slip": 3
            },
            "median_contact_stall_steps_on_fail": 17.0
          },
          "task_3": {
            "ok": 3,
            "fail": 7,
            "fail_cats": {
              "late_subgoal_timeout": 5,
              "repeated_grasp_slip": 2
            },
            "median_contact_stall_steps_on_fail": 4.0
          },
          "task_4": {
            "ok": 8,
            "fail": 2,
            "fail_cats": {
              "contact_stall_object": 1,
              "repeated_grasp_slip": 1
            },
            "median_contact_stall_steps_on_fail": 29.0
          },
          "task_5": {
            "ok": 5,
            "fail": 5,
            "fail_cats": {
              "never_grasped": 5
            },
            "median_contact_stall_steps_on_fail": 0.0
          },
          "task_6": {
            "ok": 1,
            "fail": 9,
            "fail_cats": {
              "late_subgoal_timeout": 2,
              "contact_stall_object": 6,
              "repeated_grasp_slip": 1
            },
            "median_contact_stall_steps_on_fail": 29.0
          },
          "task_7": {
            "ok": 9,
            "fail": 1,
            "fail_cats": {
              "contact_stall_object": 1
            },
            "median_contact_stall_steps_on_fail": 126.0
          },
          "task_8": {
            "ok": 9,
            "fail": 1,
            "fail_cats": {
              "repeated_grasp_slip": 1
            },
            "median_contact_stall_steps_on_fail": 3.0
          },
          "task_9": {
            "ok": 3,
            "fail": 7,
            "fail_cats": {
              "contact_stall_object": 5,
              "late_subgoal_timeout": 1,
              "stagnation_freeze": 1
            },
            "median_contact_stall_steps_on_fail": 78.0
          }
        }
      },
      "libero_10": {
        "n_episodes": 100,
        "success_rate": 0.62,
        "failure_counts": {
          "contact_stall_object": 17,
          "late_subgoal_timeout": 3,
          "repeated_grasp_slip": 16,
          "stagnation_freeze": 2
        },
        "decode_stats": {},
        "per_task": {
          "task_0": {
            "ok": 8,
            "fail": 2,
            "fail_cats": {
              "repeated_grasp_slip": 2
            },
            "median_contact_stall_steps_on_fail": 10.5
          },
          "task_1": {
            "ok": 7,
            "fail": 3,
            "fail_cats": {
              "repeated_grasp_slip": 3
            },
            "median_contact_stall_steps_on_fail": 12.0
          },
          "task_2": {
            "ok": 8,
            "fail": 2,
            "fail_cats": {
              "contact_stall_object": 2
            },
            "median_contact_stall_steps_on_fail": 32.0
          },
          "task_3": {
            "ok": 7,
            "fail": 3,
            "fail_cats": {
              "stagnation_freeze": 2,
              "contact_stall_object": 1
            },
            "median_contact_stall_steps_on_fail": 10.0
          },
          "task_4": {
            "ok": 6,
            "fail": 4,
            "fail_cats": {
              "contact_stall_object": 1,
              "repeated_grasp_slip": 3
            },
            "median_contact_stall_steps_on_fail": 10.5
          },
          "task_5": {
            "ok": 7,
            "fail": 3,
            "fail_cats": {
              "contact_stall_object": 3
            },
            "median_contact_stall_steps_on_fail": 75.0
          },
          "task_6": {
            "ok": 2,
            "fail": 8,
            "fail_cats": {
              "contact_stall_object": 7,
              "repeated_grasp_slip": 1
            },
            "median_contact_stall_steps_on_fail": 59.0
          },
          "task_7": {
            "ok": 4,
            "fail": 6,
            "fail_cats": {
              "repeated_grasp_slip": 5,
              "contact_stall_object": 1
            },
            "median_contact_stall_steps_on_fail": 15.0
          },
          "task_8": {
            "ok": 6,
            "fail": 4,
            "fail_cats": {
              "repeated_grasp_slip": 2,
              "late_subgoal_timeout": 2
            },
            "median_contact_stall_steps_on_fail": 8.0
          },
          "task_9": {
            "ok": 7,
            "fail": 3,
            "fail_cats": {
              "late_subgoal_timeout": 1,
              "contact_stall_object": 2
            },
            "median_contact_stall_steps_on_fail": 46.0
          }
        }
      }
    },
    "overall_failure_counts": {
      "contact_stall_object": 32,
      "late_subgoal_timeout": 11,
      "never_grasped": 8,
      "repeated_grasp_slip": 25,
      "stagnation_freeze": 3
    },
    "elapsed_sec": 5080.8
  },
  "exp3": {
    "tok_rates": {
      "joint_cover": {
        "franka": 0.655,
        "ur5e": 0.523,
        "iiwa": 0.561,
        "kinova3": 0.698,
        "sawyer": 0.537
      },
      "task_c1": {
        "franka": 1.02,
        "ur5e": 0.996,
        "iiwa": 1.002,
        "kinova3": 1.031,
        "sawyer": 1.067
      }
    },
    "cross_arm_semantic_probe": {
      "joint_cover": {
        "franka_val": 0.8111,
        "best_alpha": 1.0,
        "ur5e": {
          "zero_shot_r2": -0.526,
          "same_arm_oracle_r2": 0.8169
        },
        "iiwa": {
          "zero_shot_r2": 0.6452,
          "same_arm_oracle_r2": 0.8157
        },
        "kinova3": {
          "zero_shot_r2": -4.3631,
          "same_arm_oracle_r2": 0.8329
        },
        "sawyer": {
          "zero_shot_r2": -0.9455,
          "same_arm_oracle_r2": 0.8494
        }
      },
      "task_c1": {
        "franka_val": 0.8925,
        "best_alpha": 0.1,
        "ur5e": {
          "zero_shot_r2": 0.9133,
          "same_arm_oracle_r2": 0.8639
        },
        "iiwa": {
          "zero_shot_r2": 0.9125,
          "same_arm_oracle_r2": 0.8736
        },
        "kinova3": {
          "zero_shot_r2": 0.8686,
          "same_arm_oracle_r2": 0.8239
        },
        "sawyer": {
          "zero_shot_r2": 0.8728,
          "same_arm_oracle_r2": 0.8532
        }
      }
    },
    "gauge_invariance": {
      "n_windows": 100,
      "joint_slot_axis_flip_exact_match": 0.2,
      "joint_slot_index_perm_exact_match": 0.05,
      "task_c1_axis_flip_exact_match": 1.0,
      "task_c1_index_perm_exact_match": 1.0,
      "task_c1_global_se3_rot90_exact_match": 1.0
    },
    "wide_pool_compression_summary": {
      "arms": [
        {
          "split": "agilex_cobot_magic",
          "keys": [
            "schema",
            "cls",
            "epsilon",
            "vocab",
            "vocab_size",
            "profile",
            "holdout",
            "cap",
            "step_limit",
            "cell_limit",
            "atoms",
            "train_frames"
          ],
          "summary": {
            "schema": "holocover_fit_eval_v1",
            "cls": "arm",
            "epsilon": 0.05,
            "vocab": 4096,
            "vocab_size": 4096,
            "profile": "uniform",
            "holdout": "agilex_cobot_magic",
            "cap": 1500000,
            "step_limit": 0.35,
            "cell_limit": 4,
            "atoms": 59,
            "datasets": 503,
            "vocabulary_sha256": "345aa8c2981faed38f74ff368a1aa20ec7036fc7c38e6cb8ff6ba6ace7dcc04b"
          }
        },
        {
          "split": "ai2_alphabot_2",
          "keys": [
            "schema",
            "cls",
            "epsilon",
            "vocab",
            "vocab_size",
            "profile",
            "holdout",
            "cap",
            "step_limit",
            "cell_limit",
            "atoms",
            "train_frames"
          ],
          "summary": {
            "schema": "holocover_fit_eval_v1",
            "cls": "arm",
            "epsilon": 0.05,
            "vocab": 4096,
            "vocab_size": 4096,
            "profile": "uniform",
            "holdout": "ai2_alphabot_2",
            "cap": 1500000,
            "step_limit": 0.35,
            "cell_limit": 4,
            "atoms": 59,
            "datasets": 503,
            "vocabulary_sha256": "097bf8e519193396ea85cde915a883a9633d7f6ee49b6bc38254bd9757c61963"
          }
        },
        {
          "split": "airbot_mmk2",
          "keys": [
            "schema",
            "cls",
            "epsilon",
            "vocab",
            "vocab_size",
            "profile",
            "holdout",
            "cap",
            "step_limit",
            "cell_limit",
            "atoms",
            "train_frames"
          ],
          "summary": {
            "schema": "holocover_fit_eval_v1",
            "cls": "arm",
            "epsilon": 0.05,
            "vocab": 4096,
            "vocab_size": 4096,
            "profile": "uniform",
            "holdout": "airbot_mmk2",
            "cap": 1500000,
            "step_limit": 0.35,
            "cell_limit": 4,
            "atoms": 59,
            "datasets": 503,
            "vocabulary_sha256": "c57f0cc26b7aa1586be6f9f2692afdbe0d5d57784224b0e0c7d72387188cc543"
          }
        },
        {
          "split": "aloha_arx",
          "keys": [
            "schema",
            "cls",
            "epsilon",
            "vocab",
            "vocab_size",
            "profile",
            "holdout",
            "cap",
            "step_limit",
            "cell_limit",
            "atoms",
            "train_frames"
          ],
          "summary": {
            "schema": "holocover_fit_eval_v1",
            "cls": "arm",
            "epsilon": 0.05,
            "vocab": 4096,
            "vocab_size": 4096,
            "profile": "uniform",
            "holdout": "aloha_arx",
            "cap": 1500000,
            "step_limit": 0.35,
            "cell_limit": 4,
            "atoms": 59,
            "datasets": 503,
            "vocabulary_sha256": "0bdc9bf52cb7c7f22b6db7cbafc7140996e5b4323e8bbc079e1200e1d4e30f11"
          }
        },
        {
          "split": "franka_panda",
          "keys": [
            "schema",
            "cls",
            "epsilon",
            "vocab",
            "vocab_size",
            "profile",
            "holdout",
            "cap",
            "step_limit",
            "cell_limit",
            "atoms",
            "train_frames"
          ],
          "summary": {
            "schema": "holocover_fit_eval_v1",
            "cls": "arm",
            "epsilon": 0.05,
            "vocab": 4096,
            "vocab_size": 4096,
            "profile": "uniform",
            "holdout": "franka_panda",
            "cap": 1500000,
            "step_limit": 0.35,
            "cell_limit": 4,
            "atoms": 59,
            "datasets": 503,
            "vocabulary_sha256": "285aed1037f28c83803f9401134e95246b36e87feb39a095e92fc3ae3475f2da"
          }
        },
        {
          "split": "galaxea_r1_lite",
          "keys": [
            "schema",
            "cls",
            "epsilon",
            "vocab",
            "vocab_size",
            "profile",
            "holdout",
            "cap",
            "step_limit",
            "cell_limit",
            "atoms",
            "train_frames"
          ],
          "summary": {
            "schema": "holocover_fit_eval_v1",
            "cls": "arm",
            "epsilon": 0.05,
            "vocab": 4096,
            "vocab_size": 4096,
            "profile": "uniform",
            "holdout": "galaxea_r1_lite",
            "cap": 1500000,
            "step_limit": 0.35,
            "cell_limit": 4,
            "atoms": 59,
            "datasets": 503,
            "vocabulary_sha256": "f92dde7ab00d5811953c8094b4606d4cfdb63ea00f2baec959b77eb5ae4f36e6"
          }
        },
        {
          "split": "galbot_g1",
          "keys": [
            "schema",
            "cls",
            "epsilon",
            "vocab",
            "vocab_size",
            "profile",
            "holdout",
            "cap",
            "step_limit",
            "cell_limit",
            "atoms",
            "train_frames"
          ],
          "summary": {
            "schema": "holocover_fit_eval_v1",
            "cls": "arm",
            "epsilon": 0.05,
            "vocab": 4096,
            "vocab_size": 4096,
            "profile": "uniform",
            "holdout": "galbot_g1",
            "cap": 1500000,
            "step_limit": 0.35,
            "cell_limit": 4,
            "atoms": 59,
            "datasets": 503,
            "vocabulary_sha256": "2812f60be0cd4dd0d89ba8911f910171088238f5b5eef1cf03a8237ba99f9631"
          }
        },
        {
          "split": "leju_kuavo",
          "keys": [
            "schema",
            "cls",
            "epsilon",
            "vocab",
            "vocab_size",
            "profile",
            "holdout",
            "cap",
            "step_limit",
            "cell_limit",
            "atoms",
            "train_frames"
          ],
          "summary": {
            "schema": "holocover_fit_eval_v1",
            "cls": "arm",
            "epsilon": 0.05,
            "vocab": 4096,
            "vocab_size": 4096,
            "profile": "uniform",
            "holdout": "leju_kuavo",
            "cap": 1500000,
            "step_limit": 0.35,
            "cell_limit": 4,
            "atoms": 59,
            "datasets": 503,
            "vocabulary_sha256": "f029cb6bc6e554f8c1aedf9577d48e887b18469a79bb617291fb2ebd8b42e426"
          }
        },
        {
          "split": "none",
          "keys": [
            "schema",
            "cls",
            "epsilon",
            "vocab",
            "vocab_size",
            "profile",
            "holdout",
            "cap",
            "step_limit",
            "cell_limit",
            "atoms",
            "train_frames"
          ],
          "summary": {
            "schema": "holocover_fit_eval_v1",
            "cls": "arm",
            "epsilon": 0.05,
            "vocab": 4096,
            "vocab_size": 4096,
            "profile": "uniform",
            "holdout": "none",
            "cap": 1500000,
            "step_limit": 0.35,
            "cell_limit": 4,
            "atoms": 59,
            "datasets": 503,
            "vocabulary_sha256": "91d6d0e85a08b8475539b998617e02dec858a03fdd1c191fee85a247c6d8a80a"
          }
        },
        {
          "split": "piper",
          "keys": [
            "schema",
            "cls",
            "epsilon",
            "vocab",
            "vocab_size",
            "profile",
            "holdout",
            "cap",
            "step_limit",
            "cell_limit",
            "atoms",
            "train_frames"
          ],
          "summary": {
            "schema": "holocover_fit_eval_v1",
            "cls": "arm",
            "epsilon": 0.05,
            "vocab": 4096,
            "vocab_size": 4096,
            "profile": "uniform",
            "holdout": "piper",
            "cap": 1500000,
            "step_limit": 0.35,
            "cell_limit": 4,
            "atoms": 59,
            "datasets": 503,
            "vocabulary_sha256": "891b2dcd39ec44e0d079832ea9df93fe14db3e29d89cbb8afdb57235528e7208"
          }
        },
        {
          "split": "realman_rmc_aida_l",
          "keys": [
            "schema",
            "cls",
            "epsilon",
            "vocab",
            "vocab_size",
            "profile",
            "holdout",
            "cap",
            "step_limit",
            "cell_limit",
            "atoms",
            "train_frames"
          ],
          "summary": {
            "schema": "holocover_fit_eval_v1",
            "cls": "arm",
            "epsilon": 0.05,
            "vocab": 4096,
            "vocab_size": 4096,
            "profile": "uniform",
            "holdout": "realman_rmc_aida_l",
            "cap": 1500000,
            "step_limit": 0.35,
            "cell_limit": 4,
            "atoms": 59,
            "datasets": 503,
            "vocabulary_sha256": "06d200d3fd02d000edac2206b6fff59ea72a40dabc751665838c44750948cbea"
          }
        },
        {
          "split": "unitree_g1edu",
          "keys": [
            "schema",
            "cls",
            "epsilon",
            "vocab",
            "vocab_size",
            "profile",
            "holdout",
            "cap",
            "step_limit",
            "cell_limit",
            "atoms",
            "train_frames"
          ],
          "summary": {
            "schema": "holocover_fit_eval_v1",
            "cls": "arm",
            "epsilon": 0.05,
            "vocab": 4096,
            "vocab_size": 4096,
            "profile": "uniform",
            "holdout": "unitree_g1edu",
            "cap": 1500000,
            "step_limit": 0.35,
            "cell_limit": 4,
            "atoms": 59,
            "datasets": 503,
            "vocabulary_sha256": "423c66d0d355d159c96b9d529c0c5d707264aaaa54202ed733a9a7a69429bb91"
          }
        },
        {
          "split": "viperx300s",
          "keys": [
            "schema",
            "cls",
            "epsilon",
            "vocab",
            "vocab_size",
            "profile",
            "holdout",
            "cap",
            "step_limit",
            "cell_limit",
            "atoms",
            "train_frames"
          ],
          "summary": {
            "schema": "holocover_fit_eval_v1",
            "cls": "arm",
            "epsilon": 0.05,
            "vocab": 4096,
            "vocab_size": 4096,
            "profile": "uniform",
            "holdout": "viperx300s",
            "cap": 1500000,
            "step_limit": 0.35,
            "cell_limit": 4,
            "atoms": 59,
            "datasets": 503,
            "vocabulary_sha256": "662712cab6d0c41e5fedb77750719b4e38c678f7cea686d0fedf4c5bcf371997"
          }
        }
      ],
      "hands": [],
      "files_read": 13
    },
    "elapsed_sec": 22.0
  },
  "exp4": {
    "part4a_dose_response": {
      "grid": [
        {
          "kp_mult": 0.5,
          "delta_mm": 0,
          "drawer_open_mm_median": 0.0,
          "contact_force_p90_n": 0.0,
          "open_rate": 0.0
        },
        {
          "kp_mult": 0.5,
          "delta_mm": 3,
          "drawer_open_mm_median": 0.0,
          "contact_force_p90_n": 2.14,
          "open_rate": 0.0
        },
        {
          "kp_mult": 0.5,
          "delta_mm": 5,
          "drawer_open_mm_median": 0.92,
          "contact_force_p90_n": 3.69,
          "open_rate": 0.0
        },
        {
          "kp_mult": 0.5,
          "delta_mm": 10,
          "drawer_open_mm_median": 1.66,
          "contact_force_p90_n": 7.37,
          "open_rate": 0.0
        },
        {
          "kp_mult": 0.5,
          "delta_mm": 20,
          "drawer_open_mm_median": 1.66,
          "contact_force_p90_n": 14.89,
          "open_rate": 0.0
        },
        {
          "kp_mult": 0.5,
          "delta_mm": 40,
          "drawer_open_mm_median": 1.66,
          "contact_force_p90_n": 32.61,
          "open_rate": 0.0
        },
        {
          "kp_mult": 1.0,
          "delta_mm": 0,
          "drawer_open_mm_median": 0.0,
          "contact_force_p90_n": 0.0,
          "open_rate": 0.0
        },
        {
          "kp_mult": 1.0,
          "delta_mm": 3,
          "drawer_open_mm_median": 0.0,
          "contact_force_p90_n": 5.93,
          "open_rate": 0.0
        },
        {
          "kp_mult": 1.0,
          "delta_mm": 5,
          "drawer_open_mm_median": 0.0,
          "contact_force_p90_n": 9.94,
          "open_rate": 0.0
        },
        {
          "kp_mult": 1.0,
          "delta_mm": 10,
          "drawer_open_mm_median": 0.0,
          "contact_force_p90_n": 20.05,
          "open_rate": 0.0
        },
        {
          "kp_mult": 1.0,
          "delta_mm": 20,
          "drawer_open_mm_median": 0.0,
          "contact_force_p90_n": 40.57,
          "open_rate": 0.0
        },
        {
          "kp_mult": 1.0,
          "delta_mm": 40,
          "drawer_open_mm_median": 0.0,
          "contact_force_p90_n": 81.68,
          "open_rate": 0.0
        },
        {
          "kp_mult": 1.5,
          "delta_mm": 0,
          "drawer_open_mm_median": 0.0,
          "contact_force_p90_n": 0.0,
          "open_rate": 0.0
        },
        {
          "kp_mult": 1.5,
          "delta_mm": 3,
          "drawer_open_mm_median": 0.0,
          "contact_force_p90_n": 9.26,
          "open_rate": 0.0
        },
        {
          "kp_mult": 1.5,
          "delta_mm": 5,
          "drawer_open_mm_median": 0.0,
          "contact_force_p90_n": 15.66,
          "open_rate": 0.0
        },
        {
          "kp_mult": 1.5,
          "delta_mm": 10,
          "drawer_open_mm_median": 0.0,
          "contact_force_p90_n": 31.86,
          "open_rate": 0.0
        },
        {
          "kp_mult": 1.5,
          "delta_mm": 20,
          "drawer_open_mm_median": 0.0,
          "contact_force_p90_n": 64.66,
          "open_rate": 0.0
        },
        {
          "kp_mult": 1.5,
          "delta_mm": 40,
          "drawer_open_mm_median": 0.0,
          "contact_force_p90_n": 130.63,
          "open_rate": 0.0
        },
        {
          "kp_mult": 2.0,
          "delta_mm": 0,
          "drawer_open_mm_median": 0.0,
          "contact_force_p90_n": 0.0,
          "open_rate": 0.0
        },
        {
          "kp_mult": 2.0,
          "delta_mm": 3,
          "drawer_open_mm_median": 0.0,
          "contact_force_p90_n": 12.63,
          "open_rate": 0.0
        },
        {
          "kp_mult": 2.0,
          "delta_mm": 5,
          "drawer_open_mm_median": 0.0,
          "contact_force_p90_n": 21.21,
          "open_rate": 0.0
        },
        {
          "kp_mult": 2.0,
          "delta_mm": 10,
          "drawer_open_mm_median": 0.0,
          "contact_force_p90_n": 42.68,
          "open_rate": 0.0
        },
        {
          "kp_mult": 2.0,
          "delta_mm": 20,
          "drawer_open_mm_median": 0.0,
          "contact_force_p90_n": 85.61,
          "open_rate": 0.0
        },
        {
          "kp_mult": 2.0,
          "delta_mm": 40,
          "drawer_open_mm_median": 1.17,
          "contact_force_p90_n": 149.96,
          "open_rate": 0.0
        }
      ]
    },
    "part4b_diagnostic_replay": {
      "tasks": {
        "drawer_middle": {
          "n_demos": 20,
          "ref_raw_success": 18,
          "force_channel_stats": {
            "deadband_events_per_frame_mean": 0.3912,
            "gripper_gated_events_per_frame_mean": 0.0,
            "raw_r_p50_mm": 6.24,
            "raw_r_p90_mm": 46.23,
            "deadband_active_step_frac": 0.4227,
            "gripper_gated_active_step_frac": 0.0
          },
          "arms": {
            "franka": {
              "raw": {
                "success": 18,
                "rate": 0.9,
                "retention_on_ref_ok": 1.0,
                "track_err_lost_mm": null,
                "track_err_kept_mm": 0.0,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 159.95,
                "ik_cannot_episodes": 0
              },
              "raw_kp225": {
                "success": 13,
                "rate": 0.65,
                "retention_on_ref_ok": 0.6667,
                "track_err_lost_mm": 56.03,
                "track_err_kept_mm": 49.05,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 159.7,
                "ik_cannot_episodes": 0
              },
              "raw_kp75": {
                "success": 1,
                "rate": 0.05,
                "retention_on_ref_ok": 0.0,
                "track_err_lost_mm": 75.91,
                "track_err_kept_mm": null,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 1.6,
                "ik_cannot_episodes": 0
              },
              "ach_d3": {
                "success": 7,
                "rate": 0.35,
                "retention_on_ref_ok": 0.3889,
                "track_err_lost_mm": 0.86,
                "track_err_kept_mm": 0.96,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 52.22,
                "ik_cannot_episodes": 0
              },
              "c1F_grip_d3F": {
                "success": 7,
                "rate": 0.35,
                "retention_on_ref_ok": 0.3889,
                "track_err_lost_mm": 0.86,
                "track_err_kept_mm": 0.96,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 52.22,
                "ik_cannot_episodes": 0
              },
              "achF_d3F": {
                "success": 18,
                "rate": 0.9,
                "retention_on_ref_ok": 1.0,
                "track_err_lost_mm": null,
                "track_err_kept_mm": 1.26,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 159.85,
                "ik_cannot_episodes": 0
              },
              "c1F_d3F": {
                "success": 18,
                "rate": 0.9,
                "retention_on_ref_ok": 1.0,
                "track_err_lost_mm": null,
                "track_err_kept_mm": 1.21,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 159.94,
                "ik_cannot_episodes": 0
              }
            },
            "ur5e": {
              "raw": {
                "success": 8,
                "rate": 0.4,
                "retention_on_ref_ok": 0.4444,
                "track_err_lost_mm": 17.79,
                "track_err_kept_mm": 16.48,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 54.19,
                "ik_cannot_episodes": 0
              },
              "raw_kp225": {
                "success": 2,
                "rate": 0.1,
                "retention_on_ref_ok": 0.1111,
                "track_err_lost_mm": 60.86,
                "track_err_kept_mm": 40.71,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 1.56,
                "ik_cannot_episodes": 0
              },
              "raw_kp75": {
                "success": 0,
                "rate": 0.0,
                "retention_on_ref_ok": 0.0,
                "track_err_lost_mm": 71.27,
                "track_err_kept_mm": null,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 1.61,
                "ik_cannot_episodes": 0
              },
              "ach_d3": {
                "success": 3,
                "rate": 0.15,
                "retention_on_ref_ok": 0.1667,
                "track_err_lost_mm": 2.2,
                "track_err_kept_mm": 8.53,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 2.04,
                "ik_cannot_episodes": 0
              },
              "c1F_grip_d3F": {
                "success": 3,
                "rate": 0.15,
                "retention_on_ref_ok": 0.1667,
                "track_err_lost_mm": 2.2,
                "track_err_kept_mm": 8.53,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 2.04,
                "ik_cannot_episodes": 0
              },
              "achF_d3F": {
                "success": 10,
                "rate": 0.5,
                "retention_on_ref_ok": 0.5556,
                "track_err_lost_mm": 6.92,
                "track_err_kept_mm": 4.27,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 81.91,
                "ik_cannot_episodes": 0
              },
              "c1F_d3F": {
                "success": 10,
                "rate": 0.5,
                "retention_on_ref_ok": 0.5556,
                "track_err_lost_mm": 8.75,
                "track_err_kept_mm": 4.22,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 83.38,
                "ik_cannot_episodes": 0
              }
            },
            "iiwa": {
              "raw": {
                "success": 14,
                "rate": 0.7,
                "retention_on_ref_ok": 0.7778,
                "track_err_lost_mm": 9.08,
                "track_err_kept_mm": 11.25,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 159.9,
                "ik_cannot_episodes": 0
              },
              "raw_kp225": {
                "success": 13,
                "rate": 0.65,
                "retention_on_ref_ok": 0.6667,
                "track_err_lost_mm": 44.33,
                "track_err_kept_mm": 44.59,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 159.69,
                "ik_cannot_episodes": 0
              },
              "raw_kp75": {
                "success": 0,
                "rate": 0.0,
                "retention_on_ref_ok": 0.0,
                "track_err_lost_mm": 87.22,
                "track_err_kept_mm": null,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 1.66,
                "ik_cannot_episodes": 0
              },
              "ach_d3": {
                "success": 7,
                "rate": 0.35,
                "retention_on_ref_ok": 0.3889,
                "track_err_lost_mm": 0.85,
                "track_err_kept_mm": 0.89,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 18.05,
                "ik_cannot_episodes": 0
              },
              "c1F_grip_d3F": {
                "success": 7,
                "rate": 0.35,
                "retention_on_ref_ok": 0.3889,
                "track_err_lost_mm": 0.85,
                "track_err_kept_mm": 0.89,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 18.05,
                "ik_cannot_episodes": 0
              },
              "achF_d3F": {
                "success": 18,
                "rate": 0.9,
                "retention_on_ref_ok": 1.0,
                "track_err_lost_mm": null,
                "track_err_kept_mm": 1.15,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 159.85,
                "ik_cannot_episodes": 0
              },
              "c1F_d3F": {
                "success": 18,
                "rate": 0.9,
                "retention_on_ref_ok": 1.0,
                "track_err_lost_mm": null,
                "track_err_kept_mm": 1.16,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 159.85,
                "ik_cannot_episodes": 0
              }
            },
            "kinova3": {
              "raw": {
                "success": 15,
                "rate": 0.75,
                "retention_on_ref_ok": 0.7778,
                "track_err_lost_mm": 27.21,
                "track_err_kept_mm": 16.73,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 159.89,
                "ik_cannot_episodes": 0
              },
              "raw_kp225": {
                "success": 8,
                "rate": 0.4,
                "retention_on_ref_ok": 0.4444,
                "track_err_lost_mm": 38.27,
                "track_err_kept_mm": 36.62,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 130.5,
                "ik_cannot_episodes": 0
              },
              "raw_kp75": {
                "success": 0,
                "rate": 0.0,
                "retention_on_ref_ok": 0.0,
                "track_err_lost_mm": 91.56,
                "track_err_kept_mm": null,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 1.65,
                "ik_cannot_episodes": 0
              },
              "ach_d3": {
                "success": 1,
                "rate": 0.05,
                "retention_on_ref_ok": 0.0556,
                "track_err_lost_mm": 4.48,
                "track_err_kept_mm": 2.67,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 1.62,
                "ik_cannot_episodes": 14
              },
              "c1F_grip_d3F": {
                "success": 1,
                "rate": 0.05,
                "retention_on_ref_ok": 0.0556,
                "track_err_lost_mm": 4.48,
                "track_err_kept_mm": 2.67,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 1.62,
                "ik_cannot_episodes": 14
              },
              "achF_d3F": {
                "success": 7,
                "rate": 0.35,
                "retention_on_ref_ok": 0.3889,
                "track_err_lost_mm": 80.4,
                "track_err_kept_mm": 1.35,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 70.55,
                "ik_cannot_episodes": 14
              },
              "c1F_d3F": {
                "success": 7,
                "rate": 0.35,
                "retention_on_ref_ok": 0.3889,
                "track_err_lost_mm": 80.71,
                "track_err_kept_mm": 1.38,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 36.55,
                "ik_cannot_episodes": 14
              }
            }
          }
        },
        "drawer_top_bowl": {
          "n_demos": 20,
          "ref_raw_success": 15,
          "force_channel_stats": {
            "deadband_events_per_frame_mean": 0.369,
            "gripper_gated_events_per_frame_mean": 0.1335,
            "raw_r_p50_mm": 7.24,
            "raw_r_p90_mm": 27.75,
            "deadband_active_step_frac": 0.4401,
            "gripper_gated_active_step_frac": 0.1838
          },
          "arms": {
            "franka": {
              "raw": {
                "success": 15,
                "rate": 0.75,
                "retention_on_ref_ok": 1.0,
                "track_err_lost_mm": null,
                "track_err_kept_mm": 0.0,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 156.24,
                "ik_cannot_episodes": 0
              },
              "raw_kp225": {
                "success": 1,
                "rate": 0.05,
                "retention_on_ref_ok": 0.0667,
                "track_err_lost_mm": 70.05,
                "track_err_kept_mm": 37.61,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 0.2,
                "ik_cannot_episodes": 0
              },
              "raw_kp75": {
                "success": 0,
                "rate": 0.0,
                "retention_on_ref_ok": 0.0,
                "track_err_lost_mm": 121.44,
                "track_err_kept_mm": null,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 0.0,
                "ik_cannot_episodes": 0
              },
              "ach_d3": {
                "success": 0,
                "rate": 0.0,
                "retention_on_ref_ok": 0.0,
                "track_err_lost_mm": 0.81,
                "track_err_kept_mm": null,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 0.43,
                "ik_cannot_episodes": 0
              },
              "c1F_grip_d3F": {
                "success": 0,
                "rate": 0.0,
                "retention_on_ref_ok": 0.0,
                "track_err_lost_mm": 0.91,
                "track_err_kept_mm": null,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 0.8,
                "ik_cannot_episodes": 0
              },
              "achF_d3F": {
                "success": 14,
                "rate": 0.7,
                "retention_on_ref_ok": 0.9333,
                "track_err_lost_mm": 12.43,
                "track_err_kept_mm": 1.87,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 156.35,
                "ik_cannot_episodes": 1
              },
              "c1F_d3F": {
                "success": 13,
                "rate": 0.65,
                "retention_on_ref_ok": 0.8667,
                "track_err_lost_mm": 7.01,
                "track_err_kept_mm": 2.33,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 154.12,
                "ik_cannot_episodes": 1
              }
            },
            "ur5e": {
              "raw": {
                "success": 14,
                "rate": 0.7,
                "retention_on_ref_ok": 0.8,
                "track_err_lost_mm": 65.24,
                "track_err_kept_mm": 10.77,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 151.03,
                "ik_cannot_episodes": 0
              },
              "raw_kp225": {
                "success": 2,
                "rate": 0.1,
                "retention_on_ref_ok": 0.1333,
                "track_err_lost_mm": 59.91,
                "track_err_kept_mm": 49.72,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 0.01,
                "ik_cannot_episodes": 0
              },
              "raw_kp75": {
                "success": 0,
                "rate": 0.0,
                "retention_on_ref_ok": 0.0,
                "track_err_lost_mm": 77.18,
                "track_err_kept_mm": null,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 0.0,
                "ik_cannot_episodes": 0
              },
              "ach_d3": {
                "success": 0,
                "rate": 0.0,
                "retention_on_ref_ok": 0.0,
                "track_err_lost_mm": 0.7,
                "track_err_kept_mm": null,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 0.56,
                "ik_cannot_episodes": 0
              },
              "c1F_grip_d3F": {
                "success": 0,
                "rate": 0.0,
                "retention_on_ref_ok": 0.0,
                "track_err_lost_mm": 0.84,
                "track_err_kept_mm": null,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 0.36,
                "ik_cannot_episodes": 0
              },
              "achF_d3F": {
                "success": 15,
                "rate": 0.75,
                "retention_on_ref_ok": 1.0,
                "track_err_lost_mm": null,
                "track_err_kept_mm": 1.53,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 158.65,
                "ik_cannot_episodes": 0
              },
              "c1F_d3F": {
                "success": 14,
                "rate": 0.7,
                "retention_on_ref_ok": 0.9333,
                "track_err_lost_mm": 1.45,
                "track_err_kept_mm": 2.19,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 158.25,
                "ik_cannot_episodes": 0
              }
            },
            "iiwa": {
              "raw": {
                "success": 9,
                "rate": 0.45,
                "retention_on_ref_ok": 0.4667,
                "track_err_lost_mm": 18.02,
                "track_err_kept_mm": 9.38,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 156.21,
                "ik_cannot_episodes": 0
              },
              "raw_kp225": {
                "success": 7,
                "rate": 0.35,
                "retention_on_ref_ok": 0.3333,
                "track_err_lost_mm": 69.0,
                "track_err_kept_mm": 39.92,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 68.95,
                "ik_cannot_episodes": 0
              },
              "raw_kp75": {
                "success": 0,
                "rate": 0.0,
                "retention_on_ref_ok": 0.0,
                "track_err_lost_mm": 116.03,
                "track_err_kept_mm": null,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 0.0,
                "ik_cannot_episodes": 0
              },
              "ach_d3": {
                "success": 0,
                "rate": 0.0,
                "retention_on_ref_ok": 0.0,
                "track_err_lost_mm": 0.78,
                "track_err_kept_mm": null,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 0.42,
                "ik_cannot_episodes": 2
              },
              "c1F_grip_d3F": {
                "success": 0,
                "rate": 0.0,
                "retention_on_ref_ok": 0.0,
                "track_err_lost_mm": 0.92,
                "track_err_kept_mm": null,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 0.72,
                "ik_cannot_episodes": 2
              },
              "achF_d3F": {
                "success": 15,
                "rate": 0.75,
                "retention_on_ref_ok": 1.0,
                "track_err_lost_mm": null,
                "track_err_kept_mm": 2.15,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 159.43,
                "ik_cannot_episodes": 2
              },
              "c1F_d3F": {
                "success": 14,
                "rate": 0.7,
                "retention_on_ref_ok": 0.9333,
                "track_err_lost_mm": 11.34,
                "track_err_kept_mm": 2.73,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 158.95,
                "ik_cannot_episodes": 2
              }
            },
            "kinova3": {
              "raw": {
                "success": 6,
                "rate": 0.3,
                "retention_on_ref_ok": 0.4,
                "track_err_lost_mm": 34.35,
                "track_err_kept_mm": 17.85,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 141.89,
                "ik_cannot_episodes": 0
              },
              "raw_kp225": {
                "success": 3,
                "rate": 0.15,
                "retention_on_ref_ok": 0.1333,
                "track_err_lost_mm": 99.87,
                "track_err_kept_mm": 29.62,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 147.04,
                "ik_cannot_episodes": 0
              },
              "raw_kp75": {
                "success": 0,
                "rate": 0.0,
                "retention_on_ref_ok": 0.0,
                "track_err_lost_mm": 99.69,
                "track_err_kept_mm": null,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 0.0,
                "ik_cannot_episodes": 0
              },
              "ach_d3": {
                "success": 1,
                "rate": 0.05,
                "retention_on_ref_ok": 0.0667,
                "track_err_lost_mm": 1.96,
                "track_err_kept_mm": 34.82,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 1.46,
                "ik_cannot_episodes": 17
              },
              "c1F_grip_d3F": {
                "success": 1,
                "rate": 0.05,
                "retention_on_ref_ok": 0.0667,
                "track_err_lost_mm": 2.02,
                "track_err_kept_mm": 35.26,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 1.42,
                "ik_cannot_episodes": 17
              },
              "achF_d3F": {
                "success": 10,
                "rate": 0.5,
                "retention_on_ref_ok": 0.6667,
                "track_err_lost_mm": 9.48,
                "track_err_kept_mm": 2.46,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 151.58,
                "ik_cannot_episodes": 17
              },
              "c1F_d3F": {
                "success": 9,
                "rate": 0.45,
                "retention_on_ref_ok": 0.6,
                "track_err_lost_mm": 7.54,
                "track_err_kept_mm": 3.4,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 150.67,
                "ik_cannot_episodes": 17
              }
            }
          }
        },
        "bowl_freespace": {
          "n_demos": 20,
          "ref_raw_success": 20,
          "force_channel_stats": {
            "deadband_events_per_frame_mean": 0.3122,
            "gripper_gated_events_per_frame_mean": 0.2305,
            "raw_r_p50_mm": 6.23,
            "raw_r_p90_mm": 14.2,
            "deadband_active_step_frac": 0.3306,
            "gripper_gated_active_step_frac": 0.3051
          },
          "arms": {
            "franka": {
              "raw": {
                "success": 20,
                "rate": 1.0,
                "retention_on_ref_ok": 1.0,
                "track_err_lost_mm": null,
                "track_err_kept_mm": 0.0,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 0.0,
                "ik_cannot_episodes": 0
              },
              "raw_kp225": {
                "success": 2,
                "rate": 0.1,
                "retention_on_ref_ok": 0.1,
                "track_err_lost_mm": 51.12,
                "track_err_kept_mm": 53.9,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 0.0,
                "ik_cannot_episodes": 0
              },
              "raw_kp75": {
                "success": 0,
                "rate": 0.0,
                "retention_on_ref_ok": 0.0,
                "track_err_lost_mm": 70.5,
                "track_err_kept_mm": null,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 0.0,
                "ik_cannot_episodes": 0
              },
              "ach_d3": {
                "success": 19,
                "rate": 0.95,
                "retention_on_ref_ok": 0.95,
                "track_err_lost_mm": 0.79,
                "track_err_kept_mm": 0.6,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 0.0,
                "ik_cannot_episodes": 0
              },
              "c1F_grip_d3F": {
                "success": 19,
                "rate": 0.95,
                "retention_on_ref_ok": 0.95,
                "track_err_lost_mm": 2.61,
                "track_err_kept_mm": 1.37,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 0.0,
                "ik_cannot_episodes": 0
              },
              "achF_d3F": {
                "success": 19,
                "rate": 0.95,
                "retention_on_ref_ok": 0.95,
                "track_err_lost_mm": 2.17,
                "track_err_kept_mm": 1.12,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 0.0,
                "ik_cannot_episodes": 0
              },
              "c1F_d3F": {
                "success": 19,
                "rate": 0.95,
                "retention_on_ref_ok": 0.95,
                "track_err_lost_mm": 2.55,
                "track_err_kept_mm": 1.36,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 0.0,
                "ik_cannot_episodes": 0
              }
            },
            "ur5e": {
              "raw": {
                "success": 18,
                "rate": 0.9,
                "retention_on_ref_ok": 0.9,
                "track_err_lost_mm": 12.37,
                "track_err_kept_mm": 9.6,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 0.0,
                "ik_cannot_episodes": 0
              },
              "raw_kp225": {
                "success": 1,
                "rate": 0.05,
                "retention_on_ref_ok": 0.05,
                "track_err_lost_mm": 55.38,
                "track_err_kept_mm": 50.43,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 0.0,
                "ik_cannot_episodes": 0
              },
              "raw_kp75": {
                "success": 0,
                "rate": 0.0,
                "retention_on_ref_ok": 0.0,
                "track_err_lost_mm": 71.72,
                "track_err_kept_mm": null,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 0.0,
                "ik_cannot_episodes": 0
              },
              "ach_d3": {
                "success": 20,
                "rate": 1.0,
                "retention_on_ref_ok": 1.0,
                "track_err_lost_mm": null,
                "track_err_kept_mm": 0.54,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 0.0,
                "ik_cannot_episodes": 0
              },
              "c1F_grip_d3F": {
                "success": 20,
                "rate": 1.0,
                "retention_on_ref_ok": 1.0,
                "track_err_lost_mm": null,
                "track_err_kept_mm": 1.37,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 0.0,
                "ik_cannot_episodes": 0
              },
              "achF_d3F": {
                "success": 20,
                "rate": 1.0,
                "retention_on_ref_ok": 1.0,
                "track_err_lost_mm": null,
                "track_err_kept_mm": 1.3,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 0.0,
                "ik_cannot_episodes": 0
              },
              "c1F_d3F": {
                "success": 20,
                "rate": 1.0,
                "retention_on_ref_ok": 1.0,
                "track_err_lost_mm": null,
                "track_err_kept_mm": 1.59,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 0.0,
                "ik_cannot_episodes": 0
              }
            },
            "iiwa": {
              "raw": {
                "success": 16,
                "rate": 0.8,
                "retention_on_ref_ok": 0.8,
                "track_err_lost_mm": 7.85,
                "track_err_kept_mm": 6.92,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 0.0,
                "ik_cannot_episodes": 0
              },
              "raw_kp225": {
                "success": 3,
                "rate": 0.15,
                "retention_on_ref_ok": 0.15,
                "track_err_lost_mm": 40.84,
                "track_err_kept_mm": 45.73,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 0.0,
                "ik_cannot_episodes": 0
              },
              "raw_kp75": {
                "success": 0,
                "rate": 0.0,
                "retention_on_ref_ok": 0.0,
                "track_err_lost_mm": 73.63,
                "track_err_kept_mm": null,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 0.0,
                "ik_cannot_episodes": 0
              },
              "ach_d3": {
                "success": 20,
                "rate": 1.0,
                "retention_on_ref_ok": 1.0,
                "track_err_lost_mm": null,
                "track_err_kept_mm": 0.65,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 0.0,
                "ik_cannot_episodes": 5
              },
              "c1F_grip_d3F": {
                "success": 20,
                "rate": 1.0,
                "retention_on_ref_ok": 1.0,
                "track_err_lost_mm": null,
                "track_err_kept_mm": 1.56,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 0.0,
                "ik_cannot_episodes": 5
              },
              "achF_d3F": {
                "success": 20,
                "rate": 1.0,
                "retention_on_ref_ok": 1.0,
                "track_err_lost_mm": null,
                "track_err_kept_mm": 1.14,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 0.0,
                "ik_cannot_episodes": 5
              },
              "c1F_d3F": {
                "success": 20,
                "rate": 1.0,
                "retention_on_ref_ok": 1.0,
                "track_err_lost_mm": null,
                "track_err_kept_mm": 1.64,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 0.0,
                "ik_cannot_episodes": 5
              }
            },
            "kinova3": {
              "raw": {
                "success": 13,
                "rate": 0.65,
                "retention_on_ref_ok": 0.65,
                "track_err_lost_mm": 16.44,
                "track_err_kept_mm": 13.07,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 0.0,
                "ik_cannot_episodes": 0
              },
              "raw_kp225": {
                "success": 8,
                "rate": 0.4,
                "retention_on_ref_ok": 0.4,
                "track_err_lost_mm": 45.5,
                "track_err_kept_mm": 32.86,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 0.0,
                "ik_cannot_episodes": 0
              },
              "raw_kp75": {
                "success": 0,
                "rate": 0.0,
                "retention_on_ref_ok": 0.0,
                "track_err_lost_mm": 75.84,
                "track_err_kept_mm": null,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 0.0,
                "ik_cannot_episodes": 0
              },
              "ach_d3": {
                "success": 2,
                "rate": 0.1,
                "retention_on_ref_ok": 0.1,
                "track_err_lost_mm": 0.74,
                "track_err_kept_mm": 0.91,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 0.0,
                "ik_cannot_episodes": 20
              },
              "c1F_grip_d3F": {
                "success": 3,
                "rate": 0.15,
                "retention_on_ref_ok": 0.15,
                "track_err_lost_mm": 3.33,
                "track_err_kept_mm": 3.09,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 0.0,
                "ik_cannot_episodes": 20
              },
              "achF_d3F": {
                "success": 2,
                "rate": 0.1,
                "retention_on_ref_ok": 0.1,
                "track_err_lost_mm": 1.71,
                "track_err_kept_mm": 1.25,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 0.0,
                "ik_cannot_episodes": 20
              },
              "c1F_d3F": {
                "success": 2,
                "rate": 0.1,
                "retention_on_ref_ok": 0.1,
                "track_err_lost_mm": 2.83,
                "track_err_kept_mm": 1.45,
                "peak_force_median_n": 0.0,
                "max_drawer_open_median_mm": 0.0,
                "ik_cannot_episodes": 20
              }
            }
          }
        }
      },
      "hero_episode": {
        "demo_idx": 3,
        "task": "open_the_middle_drawer_of_the_cabinet",
        "modes": {
          "raw": {
            "success": true,
            "cannot_init": false,
            "ik_cannot": 0,
            "track_err_mean_mm": 0.0,
            "track_err_median_mm": 0.0,
            "peak_contact_force_n": 164.85,
            "mean_contact_force_n": 18.2,
            "max_drawer_open_mm": 161.16,
            "trace": {
              "track_err_mm": [
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0
              ],
              "contact_force_n": [
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                88.09,
                143.17,
                164.85,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                82.88,
                80.28,
                54.22,
                0.0,
                71.62,
                0.0,
                0.0,
                0.0,
                58.19,
                59.25,
                56.41,
                56.32,
                56.17,
                56.19,
                57.74,
                58.95,
                59.99,
                60.5,
                60.36,
                57.93,
                57.05,
                56.4,
                55.67,
                54.76,
                53.2,
                52.6,
                52.43,
                51.55,
                50.8,
                50.16,
                48.57,
                47.89,
                47.46,
                45.78,
                146.26,
                130.94,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0
              ],
              "drawer_open_mm": [
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                1.77,
                1.65,
                1.67,
                1.67,
                1.63,
                1.65,
                1.68,
                1.63,
                1.65,
                1.65,
                1.64,
                1.65,
                1.58,
                1.66,
                1.65,
                1.66,
                1.66,
                1.66,
                1.66,
                1.66,
                1.69,
                1.65,
                1.54,
                1.46,
                1.43,
                1.41,
                2.72,
                5.81,
                9.9,
                14.56,
                19.45,
                24.63,
                30.25,
                36.33,
                43.05,
                50.37,
                58.02,
                65.91,
                73.96,
                82.08,
                90.22,
                98.36,
                106.52,
                114.74,
                123.02,
                131.4,
                139.9,
                148.5,
                157.31,
                161.16,
                160.44,
                160.32,
                160.27,
                160.1,
                159.98,
                159.93,
                159.91,
                159.9
              ],
              "residual_r_mm": [
                17.32,
                0.0,
                0.0,
                14.14,
                14.14,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                10.0,
                14.14,
                14.14,
                10.0,
                10.0,
                14.14,
                10.0,
                14.14,
                10.0,
                10.0,
                0.0,
                31.62,
                0.0,
                0.0,
                10.0,
                10.0,
                10.0,
                20.0,
                0.0,
                10.0,
                10.0,
                10.0,
                10.0,
                14.14,
                0.0,
                45.83,
                37.42,
                30.0,
                30.0,
                30.0,
                30.0,
                17.32,
                17.32,
                44.72,
                59.16,
                53.85,
                54.77,
                54.77,
                59.16,
                59.16,
                54.77,
                54.77,
                54.77,
                54.77,
                48.99,
                48.99,
                48.99,
                48.99,
                48.99,
                45.83,
                45.83,
                45.83,
                45.83,
                45.83,
                45.83,
                45.83,
                45.83,
                45.83,
                33.17,
                41.23,
                46.9,
                34.64,
                24.49,
                14.14,
                10.0,
                0.0,
                0.0,
                0.0
              ],
              "grip_xyz_mm": [
                [
                  -195.61,
                  12.15,
                  1178.71
                ],
                [
                  -193.47,
                  10.7,
                  1177.47
                ],
                [
                  -189.82,
                  10.35,
                  1176.57
                ],
                [
                  -185.22,
                  10.02,
                  1175.32
                ],
                [
                  -179.59,
                  9.45,
                  1173.74
                ],
                [
                  -172.56,
                  8.68,
                  1172.49
                ],
                [
                  -164.41,
                  7.67,
                  1171.76
                ],
                [
                  -155.7,
                  6.52,
                  1171.51
                ],
                [
                  -146.89,
                  5.37,
                  1171.6
                ],
                [
                  -138.17,
                  4.24,
                  1171.8
                ],
                [
                  -129.52,
                  3.12,
                  1172.14
                ],
                [
                  -120.98,
                  1.91,
                  1172.54
                ],
                [
                  -112.67,
                  0.57,
                  1172.86
                ],
                [
                  -104.77,
                  -0.9,
                  1173.03
                ],
                [
                  -97.79,
                  -2.46,
                  1173.04
                ],
                [
                  -91.77,
                  -3.93,
                  1173.08
                ],
                [
                  -86.98,
                  -5.12,
                  1172.94
                ],
                [
                  -83.02,
                  -6.02,
                  1172.65
                ],
                [
                  -80.05,
                  -6.54,
                  1171.97
                ],
                [
                  -78.01,
                  -6.79,
                  1171.05
                ],
                [
                  -76.4,
                  -6.93,
                  1170.17
                ],
                [
                  -75.13,
                  -7.01,
                  1169.34
                ],
                [
                  -74.09,
                  -7.06,
                  1168.5
                ],
                [
                  -73.25,
                  -7.11,
                  1167.57
                ],
                [
                  -72.44,
                  -7.15,
                  1166.52
                ],
                [
                  -71.7,
                  -7.19,
                  1165.28
                ],
                [
                  -71.11,
                  -7.23,
                  1163.8
                ],
                [
                  -70.6,
                  -7.28,
                  1162.13
                ],
                [
                  -70.18,
                  -7.33,
                  1160.26
                ],
                [
                  -69.85,
                  -7.37,
                  1158.26
                ],
                [
                  -69.36,
                  -7.42,
                  1156.27
                ],
                [
                  -68.78,
                  -7.46,
                  1154.27
                ],
                [
                  -67.99,
                  -7.47,
                  1152.27
                ],
                [
                  -67.01,
                  -7.45,
                  1150.25
                ],
                [
                  -66.0,
                  -7.44,
                  1148.08
                ],
                [
                  -64.91,
                  -7.51,
                  1145.82
                ],
                [
                  -63.71,
                  -7.75,
                  1143.47
                ],
                [
                  -62.44,
                  -8.21,
                  1140.98
                ],
                [
                  -61.1,
                  -8.93,
                  1138.4
                ],
                [
                  -59.66,
                  -9.86,
                  1135.8
                ],
                [
                  -58.05,
                  -10.98,
                  1133.23
                ],
                [
                  -56.27,
                  -12.32,
                  1130.71
                ],
                [
                  -54.22,
                  -13.94,
                  1128.27
                ],
                [
                  -51.96,
                  -15.86,
                  1125.87
                ],
                [
                  -49.62,
                  -18.07,
                  1123.45
                ],
                [
                  -47.27,
                  -20.55,
                  1120.97
                ],
                [
                  -44.99,
                  -23.23,
                  1118.42
                ],
                [
                  -42.71,
                  -26.03,
                  1115.9
                ],
                [
                  -40.48,
                  -28.91,
                  1113.36
                ],
                [
                  -38.35,
                  -31.77,
                  1110.88
                ],
                [
                  -36.19,
                  -34.52,
                  1108.58
                ],
                [
                  -33.73,
                  -36.96,
                  1106.85
                ],
                [
                  -30.93,
                  -38.96,
                  1105.83
                ],
                [
                  -28.32,
                  -40.57,
                  1105.09
                ],
                [
                  -26.17,
                  -41.59,
                  1104.52
                ],
                [
                  -24.59,
                  -41.95,
                  1103.92
                ],
                [
                  -23.45,
                  -41.86,
                  1103.17
                ],
                [
                  -22.46,
                  -41.68,
                  1102.41
                ],
                [
                  -21.69,
                  -41.67,
                  1101.63
                ],
                [
                  -20.7,
                  -42.21,
                  1100.88
                ],
                [
                  -19.36,
                  -43.64,
                  1099.98
                ],
                [
                  -17.43,
                  -46.05,
                  1099.0
                ],
                [
                  -14.71,
                  -49.58,
                  1097.95
                ],
                [
                  -11.37,
                  -54.24,
                  1096.62
                ],
                [
                  -7.52,
                  -59.74,
                  1095.05
                ],
                [
                  -3.2,
                  -65.77,
                  1093.39
                ],
                [
                  1.55,
                  -72.04,
                  1091.84
                ],
                [
                  6.68,
                  -78.5,
                  1090.35
                ],
                [
                  12.14,
                  -85.08,
                  1088.89
                ],
                [
                  17.96,
                  -91.73,
                  1087.5
                ],
                [
                  24.03,
                  -98.48,
                  1086.11
                ],
                [
                  30.42,
                  -105.25,
                  1084.82
                ],
                [
                  37.15,
                  -111.77,
                  1083.61
                ],
                [
                  43.41,
                  -116.67,
                  1082.61
                ],
                [
                  48.64,
                  -116.53,
                  1081.76
                ],
                [
                  53.33,
                  -116.7,
                  1080.92
                ],
                [
                  57.6,
                  -116.83,
                  1080.03
                ],
                [
                  61.48,
                  -116.9,
                  1078.82
                ],
                [
                  65.08,
                  -116.92,
                  1077.31
                ],
                [
                  68.34,
                  -117.38,
                  1075.6
                ],
                [
                  71.3,
                  -117.7,
                  1073.86
                ],
                [
                  73.96,
                  -119.85,
                  1071.76
                ],
                [
                  76.3,
                  -122.18,
                  1069.2
                ],
                [
                  78.3,
                  -124.54,
                  1066.6
                ],
                [
                  79.71,
                  -127.59,
                  1063.67
                ],
                [
                  80.77,
                  -131.37,
                  1060.11
                ],
                [
                  81.36,
                  -135.62,
                  1055.95
                ],
                [
                  81.38,
                  -140.54,
                  1051.52
                ],
                [
                  81.56,
                  -141.92,
                  1049.72
                ],
                [
                  81.71,
                  -142.91,
                  1049.13
                ],
                [
                  81.8,
                  -143.86,
                  1048.83
                ],
                [
                  81.85,
                  -144.71,
                  1048.5
                ],
                [
                  81.76,
                  -145.41,
                  1047.69
                ],
                [
                  81.36,
                  -146.01,
                  1045.88
                ],
                [
                  80.54,
                  -146.39,
                  1042.14
                ],
                [
                  78.86,
                  -146.2,
                  1034.79
                ],
                [
                  77.93,
                  -146.15,
                  1030.18
                ],
                [
                  77.76,
                  -146.18,
                  1030.68
                ],
                [
                  77.1,
                  -145.15,
                  1030.94
                ],
                [
                  76.0,
                  -143.14,
                  1031.22
                ],
                [
                  74.55,
                  -140.14,
                  1031.53
                ],
                [
                  72.86,
                  -136.16,
                  1031.89
                ],
                [
                  71.02,
                  -131.59,
                  1032.28
                ],
                [
                  69.19,
                  -126.77,
                  1032.71
                ],
                [
                  67.39,
                  -121.67,
                  1033.14
                ],
                [
                  65.68,
                  -116.15,
                  1033.55
                ],
                [
                  64.11,
                  -110.16,
                  1034.03
                ],
                [
                  62.67,
                  -103.53,
                  1034.49
                ],
                [
                  61.53,
                  -96.29,
                  1034.89
                ],
                [
                  60.71,
                  -88.71,
                  1035.24
                ],
                [
                  60.21,
                  -80.86,
                  1035.53
                ],
                [
                  59.96,
                  -72.83,
                  1035.77
                ],
                [
                  59.89,
                  -64.73,
                  1035.94
                ],
                [
                  60.08,
                  -56.59,
                  1036.07
                ],
                [
                  60.61,
                  -48.44,
                  1036.2
                ],
                [
                  61.39,
                  -40.24,
                  1036.33
                ],
                [
                  62.35,
                  -31.99,
                  1036.44
                ],
                [
                  63.43,
                  -23.66,
                  1036.53
                ],
                [
                  64.46,
                  -15.23,
                  1036.59
                ],
                [
                  65.4,
                  -6.7,
                  1036.6
                ],
                [
                  66.21,
                  1.94,
                  1036.57
                ],
                [
                  66.65,
                  10.76,
                  1036.46
                ],
                [
                  66.52,
                  18.36,
                  1036.35
                ],
                [
                  65.59,
                  22.7,
                  1035.9
                ],
                [
                  64.12,
                  25.62,
                  1035.47
                ],
                [
                  62.3,
                  28.69,
                  1035.01
                ],
                [
                  60.1,
                  33.16,
                  1033.98
                ],
                [
                  57.63,
                  38.7,
                  1032.86
                ],
                [
                  55.64,
                  43.67,
                  1032.77
                ],
                [
                  54.68,
                  47.32,
                  1033.85
                ],
                [
                  54.23,
                  49.61,
                  1036.28
                ]
              ]
            }
          },
          "raw_kp225": {
            "success": true,
            "cannot_init": false,
            "ik_cannot": 0,
            "track_err_mean_mm": 43.156,
            "track_err_median_mm": 43.83,
            "peak_contact_force_n": 357.33,
            "mean_contact_force_n": 28.76,
            "max_drawer_open_mm": 161.09,
            "trace": {
              "track_err_mm": [
                0.85,
                1.11,
                1.59,
                2.57,
                3.94,
                5.66,
                7.61,
                9.63,
                11.6,
                13.51,
                15.36,
                17.14,
                18.82,
                20.37,
                21.65,
                22.74,
                23.52,
                24.2,
                24.63,
                24.92,
                25.19,
                25.39,
                25.57,
                25.72,
                25.89,
                26.04,
                26.18,
                26.33,
                26.49,
                26.65,
                26.88,
                27.12,
                27.4,
                27.72,
                28.03,
                28.38,
                28.77,
                29.18,
                29.6,
                30.04,
                30.52,
                31.06,
                31.67,
                32.3,
                32.94,
                33.59,
                34.21,
                34.85,
                35.47,
                36.08,
                36.69,
                37.25,
                37.74,
                38.1,
                38.29,
                38.31,
                38.26,
                38.19,
                38.09,
                38.14,
                38.43,
                39.02,
                39.99,
                41.32,
                42.91,
                44.66,
                46.47,
                48.35,
                49.72,
                49.98,
                50.87,
                51.3,
                45.92,
                44.69,
                46.42,
                48.09,
                49.46,
                50.35,
                50.82,
                50.99,
                50.78,
                50.02,
                48.85,
                47.57,
                46.17,
                44.77,
                43.83,
                44.04,
                44.04,
                44.2,
                44.48,
                44.74,
                44.98,
                45.38,
                45.57,
                45.11,
                44.16,
                44.79,
                45.19,
                45.65,
                46.19,
                46.81,
                47.41,
                47.98,
                48.56,
                49.21,
                50.01,
                51.07,
                52.29,
                53.63,
                55.09,
                56.63,
                58.26,
                59.97,
                61.72,
                63.51,
                65.34,
                65.63,
                64.74,
                66.53,
                70.89,
                77.15,
                85.7,
                96.03,
                105.66,
                114.36,
                120.59,
                123.64,
                125.59,
                126.56,
                126.83
              ],
              "contact_force_n": [
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                125.35,
                357.33,
                0.0,
                0.0,
                0.0,
                0.0,
                131.54,
                0.0,
                0.0,
                257.36,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                143.65,
                101.11,
                148.97,
                79.48,
                81.74,
                90.66,
                86.78,
                67.1,
                61.04,
                0.0,
                0.0,
                215.25,
                85.81,
                80.61,
                81.34,
                82.25,
                83.42,
                85.84,
                87.3,
                88.32,
                88.17,
                85.56,
                81.45,
                79.3,
                77.68,
                76.11,
                74.39,
                71.94,
                70.58,
                69.88,
                68.57,
                67.55,
                234.06,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0
              ],
              "drawer_open_mm": [
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                1.68,
                1.64,
                1.72,
                1.71,
                1.66,
                1.64,
                1.45,
                1.66,
                1.72,
                1.62,
                1.7,
                1.67,
                1.67,
                1.67,
                1.68,
                1.66,
                1.66,
                1.66,
                1.66,
                1.66,
                1.66,
                1.66,
                1.66,
                1.66,
                1.66,
                1.66,
                1.66,
                1.66,
                1.66,
                1.66,
                4.04,
                8.22,
                13.65,
                20.31,
                27.52,
                34.83,
                42.34,
                50.24,
                58.62,
                67.73,
                77.44,
                87.42,
                97.62,
                107.94,
                118.26,
                128.51,
                138.68,
                148.82,
                158.95,
                161.09,
                160.43,
                160.13,
                159.97,
                159.9,
                159.87,
                159.86,
                159.85,
                159.85,
                159.85,
                159.85,
                159.85,
                159.85,
                159.85
              ],
              "residual_r_mm": [
                17.32,
                0.0,
                0.0,
                14.14,
                14.14,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                10.0,
                14.14,
                14.14,
                10.0,
                10.0,
                14.14,
                10.0,
                14.14,
                10.0,
                10.0,
                0.0,
                31.62,
                0.0,
                0.0,
                10.0,
                10.0,
                10.0,
                20.0,
                0.0,
                10.0,
                10.0,
                10.0,
                10.0,
                14.14,
                0.0,
                45.83,
                37.42,
                30.0,
                30.0,
                30.0,
                30.0,
                17.32,
                17.32,
                44.72,
                59.16,
                53.85,
                54.77,
                54.77,
                59.16,
                59.16,
                54.77,
                54.77,
                54.77,
                54.77,
                48.99,
                48.99,
                48.99,
                48.99,
                48.99,
                45.83,
                45.83,
                45.83,
                45.83,
                45.83,
                45.83,
                45.83,
                45.83,
                45.83,
                33.17,
                41.23,
                46.9,
                34.64,
                24.49,
                14.14,
                10.0,
                0.0,
                0.0,
                0.0
              ],
              "grip_xyz_mm": [
                [
                  -195.86,
                  11.48,
                  1178.25
                ],
                [
                  -193.24,
                  9.8,
                  1176.85
                ],
                [
                  -188.76,
                  9.5,
                  1175.75
                ],
                [
                  -183.07,
                  9.13,
                  1174.24
                ],
                [
                  -176.02,
                  8.43,
                  1172.43
                ],
                [
                  -167.2,
                  7.45,
                  1171.18
                ],
                [
                  -157.05,
                  6.13,
                  1170.61
                ],
                [
                  -146.3,
                  4.66,
                  1170.64
                ],
                [
                  -135.51,
                  3.21,
                  1171.03
                ],
                [
                  -124.89,
                  1.8,
                  1171.52
                ],
                [
                  -114.39,
                  0.41,
                  1172.13
                ],
                [
                  -104.11,
                  -1.09,
                  1172.75
                ],
                [
                  -94.15,
                  -2.75,
                  1173.22
                ],
                [
                  -84.74,
                  -4.55,
                  1173.48
                ],
                [
                  -76.51,
                  -6.45,
                  1173.55
                ],
                [
                  -69.44,
                  -8.2,
                  1173.67
                ],
                [
                  -63.89,
                  -9.57,
                  1173.53
                ],
                [
                  -59.26,
                  -10.55,
                  1173.22
                ],
                [
                  -55.84,
                  -11.06,
                  1172.41
                ],
                [
                  -53.49,
                  -11.28,
                  1171.32
                ],
                [
                  -51.6,
                  -11.38,
                  1170.32
                ],
                [
                  -50.12,
                  -11.43,
                  1169.34
                ],
                [
                  -48.9,
                  -11.44,
                  1168.36
                ],
                [
                  -47.9,
                  -11.43,
                  1167.23
                ],
                [
                  -46.91,
                  -11.42,
                  1165.95
                ],
                [
                  -46.01,
                  -11.4,
                  1164.44
                ],
                [
                  -45.28,
                  -11.38,
                  1162.66
                ],
                [
                  -44.63,
                  -11.38,
                  1160.67
                ],
                [
                  -44.07,
                  -11.38,
                  1158.45
                ],
                [
                  -43.59,
                  -11.36,
                  1156.08
                ],
                [
                  -42.89,
                  -11.35,
                  1153.77
                ],
                [
                  -42.09,
                  -11.3,
                  1151.41
                ],
                [
                  -41.04,
                  -11.2,
                  1149.06
                ],
                [
                  -39.77,
                  -11.06,
                  1146.65
                ],
                [
                  -38.47,
                  -10.94,
                  1144.07
                ],
                [
                  -37.09,
                  -10.93,
                  1141.38
                ],
                [
                  -35.56,
                  -11.15,
                  1138.59
                ],
                [
                  -33.97,
                  -11.65,
                  1135.62
                ],
                [
                  -32.3,
                  -12.46,
                  1132.56
                ],
                [
                  -30.51,
                  -13.5,
                  1129.49
                ],
                [
                  -28.53,
                  -14.73,
                  1126.47
                ],
                [
                  -26.31,
                  -16.25,
                  1123.5
                ],
                [
                  -23.78,
                  -18.15,
                  1120.6
                ],
                [
                  -21.05,
                  -20.44,
                  1117.71
                ],
                [
                  -18.24,
                  -23.09,
                  1114.8
                ],
                [
                  -15.43,
                  -26.08,
                  1111.81
                ],
                [
                  -12.75,
                  -29.3,
                  1108.74
                ],
                [
                  -10.06,
                  -32.67,
                  1105.69
                ],
                [
                  -7.45,
                  -36.13,
                  1102.64
                ],
                [
                  -4.96,
                  -39.55,
                  1099.66
                ],
                [
                  -2.42,
                  -42.83,
                  1096.92
                ],
                [
                  0.46,
                  -45.69,
                  1094.91
                ],
                [
                  3.65,
                  -48.01,
                  1093.71
                ],
                [
                  6.52,
                  -49.83,
                  1092.76
                ],
                [
                  8.79,
                  -50.88,
                  1091.97
                ],
                [
                  10.34,
                  -51.07,
                  1091.09
                ],
                [
                  11.33,
                  -50.81,
                  1089.98
                ],
                [
                  12.14,
                  -50.59,
                  1088.91
                ],
                [
                  12.62,
                  -50.73,
                  1087.79
                ],
                [
                  13.41,
                  -51.75,
                  1086.74
                ],
                [
                  14.69,
                  -54.01,
                  1085.51
                ],
                [
                  16.82,
                  -57.52,
                  1084.25
                ],
                [
                  20.05,
                  -62.46,
                  1082.93
                ],
                [
                  24.15,
                  -68.7,
                  1081.25
                ],
                [
                  29.03,
                  -75.8,
                  1079.33
                ],
                [
                  34.59,
                  -83.32,
                  1077.33
                ],
                [
                  40.75,
                  -90.92,
                  1075.51
                ],
                [
                  47.38,
                  -98.64,
                  1073.74
                ],
                [
                  53.9,
                  -105.22,
                  1070.93
                ],
                [
                  60.04,
                  -108.44,
                  1066.32
                ],
                [
                  66.58,
                  -111.77,
                  1061.61
                ],
                [
                  72.6,
                  -114.3,
                  1057.04
                ],
                [
                  72.95,
                  -115.6,
                  1055.11
                ],
                [
                  77.63,
                  -115.6,
                  1053.89
                ],
                [
                  84.99,
                  -116.4,
                  1052.9
                ],
                [
                  91.67,
                  -117.31,
                  1051.9
                ],
                [
                  97.46,
                  -118.01,
                  1050.77
                ],
                [
                  102.29,
                  -118.39,
                  1049.36
                ],
                [
                  106.72,
                  -119.34,
                  1048.26
                ],
                [
                  110.5,
                  -119.91,
                  1047.04
                ],
                [
                  113.65,
                  -120.55,
                  1045.99
                ],
                [
                  116.35,
                  -121.39,
                  1045.25
                ],
                [
                  118.53,
                  -122.4,
                  1044.66
                ],
                [
                  120.23,
                  -123.47,
                  1044.17
                ],
                [
                  121.23,
                  -124.73,
                  1043.69
                ],
                [
                  121.94,
                  -126.06,
                  1043.32
                ],
                [
                  122.45,
                  -127.39,
                  1043.1
                ],
                [
                  122.91,
                  -128.6,
                  1042.98
                ],
                [
                  123.33,
                  -129.69,
                  1042.99
                ],
                [
                  123.74,
                  -130.67,
                  1043.03
                ],
                [
                  124.15,
                  -131.46,
                  1043.23
                ],
                [
                  124.49,
                  -132.17,
                  1043.36
                ],
                [
                  124.7,
                  -132.72,
                  1043.44
                ],
                [
                  124.81,
                  -133.13,
                  1043.49
                ],
                [
                  124.19,
                  -133.31,
                  1041.33
                ],
                [
                  121.86,
                  -132.7,
                  1032.9
                ],
                [
                  118.55,
                  -131.11,
                  1021.57
                ],
                [
                  118.66,
                  -129.91,
                  1022.36
                ],
                [
                  117.85,
                  -127.33,
                  1022.92
                ],
                [
                  116.53,
                  -123.56,
                  1023.57
                ],
                [
                  114.8,
                  -118.64,
                  1024.32
                ],
                [
                  112.73,
                  -112.57,
                  1025.21
                ],
                [
                  110.45,
                  -105.97,
                  1026.16
                ],
                [
                  108.11,
                  -99.27,
                  1027.15
                ],
                [
                  105.78,
                  -92.36,
                  1028.11
                ],
                [
                  103.54,
                  -85.04,
                  1029.0
                ],
                [
                  101.49,
                  -77.19,
                  1029.78
                ],
                [
                  99.67,
                  -68.57,
                  1030.45
                ],
                [
                  98.22,
                  -59.25,
                  1030.97
                ],
                [
                  97.14,
                  -49.55,
                  1031.36
                ],
                [
                  96.43,
                  -39.54,
                  1031.65
                ],
                [
                  96.0,
                  -29.33,
                  1031.86
                ],
                [
                  95.84,
                  -19.05,
                  1032.0
                ],
                [
                  96.01,
                  -8.75,
                  1032.07
                ],
                [
                  96.56,
                  1.56,
                  1032.09
                ],
                [
                  97.39,
                  11.91,
                  1032.09
                ],
                [
                  98.42,
                  22.32,
                  1032.06
                ],
                [
                  99.75,
                  30.79,
                  1031.74
                ],
                [
                  100.87,
                  37.94,
                  1030.41
                ],
                [
                  99.88,
                  48.92,
                  1024.63
                ],
                [
                  97.07,
                  62.05,
                  1015.1
                ],
                [
                  93.24,
                  75.82,
                  1004.65
                ],
                [
                  88.34,
                  89.75,
                  994.25
                ],
                [
                  82.46,
                  101.99,
                  984.41
                ],
                [
                  76.19,
                  111.95,
                  975.75
                ],
                [
                  70.16,
                  121.27,
                  968.33
                ],
                [
                  64.87,
                  130.27,
                  962.63
                ],
                [
                  60.67,
                  138.24,
                  959.58
                ],
                [
                  57.67,
                  144.97,
                  958.56
                ],
                [
                  56.39,
                  149.71,
                  959.48
                ],
                [
                  55.98,
                  152.68,
                  962.39
                ]
              ]
            }
          },
          "ach_d3": {
            "success": false,
            "cannot_init": false,
            "ik_cannot": 0,
            "track_err_mean_mm": 1.168,
            "track_err_median_mm": 1.029,
            "peak_contact_force_n": 47.16,
            "mean_contact_force_n": 1.2,
            "max_drawer_open_mm": 1.73,
            "trace": {
              "track_err_mm": [
                0.48,
                0.25,
                0.12,
                0.16,
                0.22,
                0.3,
                0.34,
                0.36,
                0.37,
                0.36,
                0.35,
                0.4,
                0.4,
                0.37,
                0.32,
                0.26,
                0.19,
                0.18,
                0.24,
                0.33,
                0.41,
                0.47,
                0.5,
                0.51,
                0.51,
                0.5,
                0.49,
                0.49,
                0.49,
                0.5,
                0.48,
                0.47,
                0.62,
                0.71,
                0.76,
                0.78,
                0.77,
                0.77,
                0.76,
                0.74,
                0.72,
                0.7,
                0.66,
                0.63,
                0.6,
                0.6,
                0.62,
                0.64,
                0.66,
                0.68,
                0.7,
                0.71,
                0.71,
                0.73,
                0.77,
                0.82,
                0.88,
                0.92,
                0.94,
                0.93,
                0.97,
                0.88,
                0.85,
                0.85,
                0.95,
                1.07,
                1.16,
                1.24,
                1.31,
                1.4,
                1.49,
                1.51,
                1.61,
                1.52,
                1.66,
                1.37,
                1.37,
                1.36,
                1.41,
                1.36,
                1.34,
                1.16,
                1.13,
                1.21,
                1.07,
                1.03,
                1.17,
                1.07,
                1.23,
                1.46,
                1.59,
                1.67,
                1.74,
                1.83,
                1.9,
                2.0,
                2.07,
                1.93,
                1.99,
                1.97,
                1.98,
                1.97,
                1.96,
                1.93,
                1.91,
                1.9,
                1.89,
                1.9,
                1.92,
                1.92,
                1.93,
                1.95,
                1.96,
                1.98,
                2.0,
                2.02,
                2.04,
                2.07,
                2.11,
                2.14,
                2.17,
                2.22,
                2.24,
                2.24,
                2.25,
                2.28,
                2.35,
                2.38,
                2.49,
                2.42,
                2.35
              ],
              "contact_force_n": [
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                40.52,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                26.18,
                0.0,
                0.0,
                43.2,
                0.0,
                47.16,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0
              ],
              "drawer_open_mm": [
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                1.73,
                1.6,
                1.56,
                1.65,
                1.69,
                1.63,
                1.7,
                1.67,
                1.63,
                1.67,
                1.65,
                1.66,
                1.63,
                1.64,
                1.66,
                1.65,
                1.66,
                1.66,
                1.66,
                1.66,
                1.65,
                1.68,
                1.6,
                1.56,
                1.54,
                1.53,
                1.53,
                1.53,
                1.53,
                1.53,
                1.53,
                1.53,
                1.53,
                1.53,
                1.53,
                1.53,
                1.53,
                1.53,
                1.53,
                1.53,
                1.53,
                1.53,
                1.53,
                1.53,
                1.53,
                1.53,
                1.53,
                1.53,
                1.53,
                1.53,
                1.53,
                1.53,
                1.53,
                1.53,
                1.53,
                1.53,
                1.53,
                1.53
              ],
              "residual_r_mm": [
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0
              ],
              "grip_xyz_mm": [
                [
                  -195.33,
                  12.49,
                  1178.9
                ],
                [
                  -193.38,
                  10.9,
                  1177.57
                ],
                [
                  -189.88,
                  10.44,
                  1176.61
                ],
                [
                  -185.37,
                  10.08,
                  1175.33
                ],
                [
                  -179.81,
                  9.49,
                  1173.73
                ],
                [
                  -172.86,
                  8.73,
                  1172.43
                ],
                [
                  -164.74,
                  7.74,
                  1171.76
                ],
                [
                  -156.05,
                  6.6,
                  1171.49
                ],
                [
                  -147.25,
                  5.44,
                  1171.56
                ],
                [
                  -138.53,
                  4.3,
                  1171.76
                ],
                [
                  -129.87,
                  3.17,
                  1172.1
                ],
                [
                  -121.37,
                  1.92,
                  1172.42
                ],
                [
                  -113.05,
                  0.57,
                  1172.75
                ],
                [
                  -105.13,
                  -0.91,
                  1172.94
                ],
                [
                  -98.1,
                  -2.48,
                  1172.97
                ],
                [
                  -92.02,
                  -3.97,
                  1173.04
                ],
                [
                  -87.14,
                  -5.22,
                  1172.95
                ],
                [
                  -83.1,
                  -6.17,
                  1172.71
                ],
                [
                  -80.03,
                  -6.73,
                  1172.11
                ],
                [
                  -77.88,
                  -7.02,
                  1171.25
                ],
                [
                  -76.2,
                  -7.18,
                  1170.42
                ],
                [
                  -74.88,
                  -7.29,
                  1169.62
                ],
                [
                  -73.82,
                  -7.36,
                  1168.8
                ],
                [
                  -72.97,
                  -7.41,
                  1167.87
                ],
                [
                  -72.16,
                  -7.46,
                  1166.82
                ],
                [
                  -71.43,
                  -7.49,
                  1165.57
                ],
                [
                  -70.84,
                  -7.52,
                  1164.1
                ],
                [
                  -70.34,
                  -7.56,
                  1162.43
                ],
                [
                  -69.91,
                  -7.59,
                  1160.58
                ],
                [
                  -69.56,
                  -7.62,
                  1158.58
                ],
                [
                  -69.09,
                  -7.66,
                  1156.59
                ],
                [
                  -68.51,
                  -7.68,
                  1154.58
                ],
                [
                  -67.67,
                  -7.74,
                  1152.73
                ],
                [
                  -66.63,
                  -7.75,
                  1150.77
                ],
                [
                  -65.59,
                  -7.76,
                  1148.63
                ],
                [
                  -64.5,
                  -7.84,
                  1146.39
                ],
                [
                  -63.3,
                  -8.08,
                  1144.04
                ],
                [
                  -62.04,
                  -8.54,
                  1141.56
                ],
                [
                  -60.72,
                  -9.25,
                  1138.97
                ],
                [
                  -59.29,
                  -10.17,
                  1136.37
                ],
                [
                  -57.73,
                  -11.29,
                  1133.79
                ],
                [
                  -56.0,
                  -12.63,
                  1131.27
                ],
                [
                  -54.0,
                  -14.24,
                  1128.82
                ],
                [
                  -51.81,
                  -16.16,
                  1126.4
                ],
                [
                  -49.51,
                  -18.38,
                  1123.96
                ],
                [
                  -47.18,
                  -20.86,
                  1121.48
                ],
                [
                  -44.91,
                  -23.55,
                  1118.95
                ],
                [
                  -42.63,
                  -26.36,
                  1116.44
                ],
                [
                  -40.41,
                  -29.25,
                  1113.92
                ],
                [
                  -38.28,
                  -32.14,
                  1111.45
                ],
                [
                  -36.12,
                  -34.92,
                  1109.16
                ],
                [
                  -33.69,
                  -37.39,
                  1107.41
                ],
                [
                  -30.95,
                  -39.44,
                  1106.35
                ],
                [
                  -28.39,
                  -41.09,
                  1105.59
                ],
                [
                  -26.25,
                  -42.17,
                  1105.01
                ],
                [
                  -24.66,
                  -42.6,
                  1104.41
                ],
                [
                  -23.52,
                  -42.58,
                  1103.68
                ],
                [
                  -22.54,
                  -42.44,
                  1102.93
                ],
                [
                  -21.77,
                  -42.45,
                  1102.15
                ],
                [
                  -20.83,
                  -42.98,
                  1101.38
                ],
                [
                  -19.48,
                  -44.46,
                  1100.49
                ],
                [
                  -17.64,
                  -46.76,
                  1099.47
                ],
                [
                  -14.98,
                  -50.23,
                  1098.42
                ],
                [
                  -11.67,
                  -54.85,
                  1097.12
                ],
                [
                  -8.11,
                  -60.23,
                  1095.6
                ],
                [
                  -3.92,
                  -66.31,
                  1093.98
                ],
                [
                  0.77,
                  -72.64,
                  1092.45
                ],
                [
                  5.85,
                  -79.14,
                  1091.0
                ],
                [
                  11.26,
                  -85.77,
                  1089.57
                ],
                [
                  17.02,
                  -92.48,
                  1088.21
                ],
                [
                  23.02,
                  -99.29,
                  1086.85
                ],
                [
                  29.41,
                  -106.06,
                  1085.58
                ],
                [
                  36.07,
                  -112.66,
                  1084.39
                ],
                [
                  42.14,
                  -117.22,
                  1083.25
                ],
                [
                  47.22,
                  -115.82,
                  1082.26
                ],
                [
                  52.11,
                  -116.75,
                  1081.54
                ],
                [
                  56.52,
                  -117.35,
                  1080.7
                ],
                [
                  60.49,
                  -117.5,
                  1079.53
                ],
                [
                  64.07,
                  -117.59,
                  1078.02
                ],
                [
                  67.37,
                  -117.93,
                  1076.39
                ],
                [
                  70.36,
                  -118.17,
                  1074.71
                ],
                [
                  73.02,
                  -120.11,
                  1072.4
                ],
                [
                  75.34,
                  -122.51,
                  1069.71
                ],
                [
                  77.35,
                  -125.06,
                  1067.13
                ],
                [
                  78.82,
                  -127.87,
                  1064.2
                ],
                [
                  79.93,
                  -131.46,
                  1060.69
                ],
                [
                  80.51,
                  -135.98,
                  1056.66
                ],
                [
                  80.61,
                  -140.54,
                  1052.25
                ],
                [
                  80.71,
                  -142.51,
                  1050.39
                ],
                [
                  80.8,
                  -143.63,
                  1050.02
                ],
                [
                  80.87,
                  -144.6,
                  1049.9
                ],
                [
                  80.93,
                  -145.48,
                  1049.66
                ],
                [
                  80.89,
                  -146.19,
                  1048.97
                ],
                [
                  80.62,
                  -146.68,
                  1047.41
                ],
                [
                  79.84,
                  -147.17,
                  1043.72
                ],
                [
                  78.13,
                  -147.21,
                  1036.36
                ],
                [
                  77.22,
                  -147.15,
                  1031.85
                ],
                [
                  77.04,
                  -147.16,
                  1032.17
                ],
                [
                  76.41,
                  -146.18,
                  1032.5
                ],
                [
                  75.33,
                  -144.19,
                  1032.74
                ],
                [
                  73.92,
                  -141.22,
                  1033.06
                ],
                [
                  72.25,
                  -137.26,
                  1033.4
                ],
                [
                  70.45,
                  -132.7,
                  1033.79
                ],
                [
                  68.64,
                  -127.87,
                  1034.2
                ],
                [
                  66.87,
                  -122.78,
                  1034.62
                ],
                [
                  65.2,
                  -117.25,
                  1035.02
                ],
                [
                  63.67,
                  -111.27,
                  1035.49
                ],
                [
                  62.29,
                  -104.67,
                  1035.97
                ],
                [
                  61.21,
                  -97.46,
                  1036.38
                ],
                [
                  60.47,
                  -89.88,
                  1036.74
                ],
                [
                  60.06,
                  -82.04,
                  1037.05
                ],
                [
                  59.9,
                  -74.02,
                  1037.31
                ],
                [
                  59.9,
                  -65.92,
                  1037.5
                ],
                [
                  60.15,
                  -57.79,
                  1037.65
                ],
                [
                  60.74,
                  -49.64,
                  1037.8
                ],
                [
                  61.59,
                  -41.45,
                  1037.93
                ],
                [
                  62.62,
                  -33.2,
                  1038.06
                ],
                [
                  63.76,
                  -24.89,
                  1038.17
                ],
                [
                  64.88,
                  -16.47,
                  1038.24
                ],
                [
                  65.9,
                  -7.95,
                  1038.26
                ],
                [
                  66.79,
                  0.68,
                  1038.24
                ],
                [
                  67.33,
                  9.48,
                  1038.14
                ],
                [
                  67.32,
                  17.15,
                  1038.05
                ],
                [
                  66.53,
                  21.66,
                  1037.64
                ],
                [
                  65.14,
                  24.63,
                  1037.22
                ],
                [
                  63.38,
                  27.71,
                  1036.76
                ],
                [
                  61.23,
                  32.13,
                  1035.76
                ],
                [
                  58.83,
                  37.65,
                  1034.63
                ],
                [
                  56.94,
                  42.48,
                  1034.52
                ],
                [
                  55.99,
                  46.19,
                  1035.55
                ],
                [
                  55.55,
                  48.56,
                  1037.92
                ]
              ]
            }
          },
          "c1F_d3F": {
            "success": true,
            "cannot_init": false,
            "ik_cannot": 0,
            "track_err_mean_mm": 1.414,
            "track_err_median_mm": 0.967,
            "peak_contact_force_n": 149.54,
            "mean_contact_force_n": 30.49,
            "max_drawer_open_mm": 160.77,
            "trace": {
              "track_err_mm": [
                1.97,
                1.79,
                0.84,
                1.43,
                2.43,
                1.7,
                0.74,
                0.29,
                0.27,
                0.31,
                0.34,
                0.4,
                0.39,
                0.37,
                0.32,
                0.26,
                0.19,
                0.18,
                0.24,
                0.33,
                0.41,
                0.47,
                0.5,
                0.51,
                0.51,
                0.5,
                0.49,
                0.49,
                0.49,
                0.5,
                0.48,
                0.47,
                0.62,
                0.71,
                0.76,
                0.78,
                0.77,
                0.77,
                0.76,
                0.74,
                0.72,
                0.7,
                0.66,
                0.63,
                0.6,
                0.6,
                0.62,
                0.64,
                0.66,
                0.68,
                0.7,
                0.71,
                0.71,
                0.73,
                0.77,
                0.82,
                0.88,
                0.92,
                0.94,
                0.93,
                0.97,
                0.88,
                0.85,
                0.46,
                1.45,
                2.7,
                2.37,
                2.24,
                2.38,
                2.3,
                2.49,
                2.32,
                2.21,
                1.35,
                0.73,
                0.63,
                0.18,
                0.73,
                1.18,
                1.27,
                1.8,
                1.48,
                0.97,
                1.15,
                1.08,
                0.91,
                1.22,
                1.08,
                1.86,
                2.32,
                1.88,
                2.03,
                2.3,
                2.27,
                1.78,
                2.47,
                2.39,
                1.91,
                1.34,
                0.4,
                0.9,
                1.03,
                0.98,
                1.16,
                1.57,
                1.81,
                1.61,
                1.75,
                2.2,
                2.42,
                2.42,
                2.35,
                2.48,
                2.7,
                2.81,
                2.8,
                2.71,
                2.6,
                2.48,
                2.36,
                2.23,
                1.02,
                2.52,
                3.22,
                2.3,
                3.04,
                4.71,
                5.35,
                5.5,
                5.41,
                5.32
              ],
              "contact_force_n": [
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                32.52,
                70.14,
                0.0,
                0.0,
                0.0,
                49.78,
                0.0,
                149.54,
                0.0,
                0.0,
                121.2,
                37.88,
                0.0,
                42.55,
                0.0,
                86.44,
                101.3,
                0.0,
                110.45,
                94.51,
                107.84,
                0.0,
                0.0,
                104.38,
                95.01,
                119.71,
                114.9,
                117.03,
                103.98,
                103.93,
                114.75,
                114.54,
                117.35,
                116.64,
                93.52,
                93.99,
                93.71,
                92.73,
                91.98,
                95.52,
                93.9,
                93.28,
                93.1,
                93.05,
                93.02,
                93.19,
                93.32,
                93.42,
                100.45,
                141.58,
                113.96,
                104.73,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0
              ],
              "drawer_open_mm": [
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.78,
                1.72,
                1.68,
                1.6,
                1.62,
                1.69,
                1.67,
                1.66,
                1.66,
                1.66,
                1.68,
                1.69,
                1.67,
                1.7,
                1.56,
                1.66,
                1.66,
                1.66,
                1.66,
                1.66,
                1.66,
                1.65,
                1.57,
                1.5,
                1.48,
                1.85,
                4.59,
                8.47,
                12.68,
                17.23,
                22.33,
                27.71,
                33.34,
                39.18,
                46.41,
                54.36,
                62.29,
                70.23,
                78.24,
                86.52,
                94.89,
                103.13,
                111.29,
                119.43,
                127.6,
                135.86,
                144.23,
                152.71,
                160.26,
                160.77,
                160.55,
                160.39,
                160.42,
                160.31,
                160.08,
                159.96,
                159.91,
                159.89
              ],
              "residual_r_mm": [
                17.32,
                0.0,
                0.0,
                14.14,
                14.14,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                0.0,
                10.0,
                14.14,
                14.14,
                10.0,
                10.0,
                14.14,
                10.0,
                14.14,
                10.0,
                10.0,
                0.0,
                31.62,
                0.0,
                0.0,
                10.0,
                10.0,
                10.0,
                20.0,
                0.0,
                10.0,
                10.0,
                10.0,
                10.0,
                14.14,
                0.0,
                45.83,
                37.42,
                30.0,
                30.0,
                30.0,
                30.0,
                17.32,
                17.32,
                44.72,
                59.16,
                53.85,
                54.77,
                54.77,
                59.16,
                59.16,
                54.77,
                54.77,
                54.77,
                54.77,
                48.99,
                48.99,
                48.99,
                48.99,
                48.99,
                45.83,
                45.83,
                45.83,
                45.83,
                45.83,
                45.83,
                45.83,
                45.83,
                45.83,
                33.17,
                41.23,
                46.9,
                34.64,
                24.49,
                14.14,
                10.0,
                0.0,
                0.0,
                0.0
              ],
              "grip_xyz_mm": [
                [
                  -194.5,
                  13.38,
                  1179.79
                ],
                [
                  -192.52,
                  11.83,
                  1178.48
                ],
                [
                  -189.44,
                  10.91,
                  1177.07
                ],
                [
                  -184.34,
                  10.29,
                  1176.4
                ],
                [
                  -178.02,
                  9.59,
                  1175.58
                ],
                [
                  -171.51,
                  8.77,
                  1173.82
                ],
                [
                  -164.1,
                  7.76,
                  1172.42
                ],
                [
                  -155.78,
                  6.61,
                  1171.77
                ],
                [
                  -147.14,
                  5.45,
                  1171.68
                ],
                [
                  -138.48,
                  4.3,
                  1171.81
                ],
                [
                  -129.85,
                  3.17,
                  1172.12
                ],
                [
                  -121.36,
                  1.92,
                  1172.43
                ],
                [
                  -113.05,
                  0.57,
                  1172.75
                ],
                [
                  -105.13,
                  -0.91,
                  1172.94
                ],
                [
                  -98.1,
                  -2.48,
                  1172.97
                ],
                [
                  -92.02,
                  -3.97,
                  1173.04
                ],
                [
                  -87.14,
                  -5.22,
                  1172.95
                ],
                [
                  -83.1,
                  -6.17,
                  1172.71
                ],
                [
                  -80.03,
                  -6.73,
                  1172.11
                ],
                [
                  -77.88,
                  -7.02,
                  1171.25
                ],
                [
                  -76.2,
                  -7.18,
                  1170.42
                ],
                [
                  -74.88,
                  -7.29,
                  1169.62
                ],
                [
                  -73.82,
                  -7.36,
                  1168.8
                ],
                [
                  -72.97,
                  -7.41,
                  1167.87
                ],
                [
                  -72.16,
                  -7.46,
                  1166.82
                ],
                [
                  -71.43,
                  -7.49,
                  1165.57
                ],
                [
                  -70.84,
                  -7.52,
                  1164.1
                ],
                [
                  -70.34,
                  -7.56,
                  1162.43
                ],
                [
                  -69.91,
                  -7.59,
                  1160.58
                ],
                [
                  -69.56,
                  -7.62,
                  1158.58
                ],
                [
                  -69.09,
                  -7.66,
                  1156.59
                ],
                [
                  -68.51,
                  -7.68,
                  1154.58
                ],
                [
                  -67.67,
                  -7.74,
                  1152.73
                ],
                [
                  -66.63,
                  -7.75,
                  1150.77
                ],
                [
                  -65.59,
                  -7.76,
                  1148.63
                ],
                [
                  -64.5,
                  -7.84,
                  1146.39
                ],
                [
                  -63.3,
                  -8.08,
                  1144.04
                ],
                [
                  -62.04,
                  -8.54,
                  1141.56
                ],
                [
                  -60.72,
                  -9.25,
                  1138.97
                ],
                [
                  -59.29,
                  -10.17,
                  1136.37
                ],
                [
                  -57.73,
                  -11.29,
                  1133.79
                ],
                [
                  -56.0,
                  -12.63,
                  1131.27
                ],
                [
                  -54.0,
                  -14.24,
                  1128.82
                ],
                [
                  -51.81,
                  -16.16,
                  1126.4
                ],
                [
                  -49.51,
                  -18.38,
                  1123.96
                ],
                [
                  -47.18,
                  -20.86,
                  1121.48
                ],
                [
                  -44.91,
                  -23.55,
                  1118.95
                ],
                [
                  -42.63,
                  -26.36,
                  1116.44
                ],
                [
                  -40.41,
                  -29.25,
                  1113.92
                ],
                [
                  -38.28,
                  -32.14,
                  1111.45
                ],
                [
                  -36.12,
                  -34.92,
                  1109.16
                ],
                [
                  -33.69,
                  -37.39,
                  1107.41
                ],
                [
                  -30.95,
                  -39.44,
                  1106.35
                ],
                [
                  -28.39,
                  -41.09,
                  1105.59
                ],
                [
                  -26.25,
                  -42.17,
                  1105.01
                ],
                [
                  -24.66,
                  -42.6,
                  1104.41
                ],
                [
                  -23.52,
                  -42.58,
                  1103.68
                ],
                [
                  -22.54,
                  -42.44,
                  1102.93
                ],
                [
                  -21.77,
                  -42.45,
                  1102.15
                ],
                [
                  -20.83,
                  -42.98,
                  1101.38
                ],
                [
                  -19.48,
                  -44.46,
                  1100.49
                ],
                [
                  -17.64,
                  -46.76,
                  1099.47
                ],
                [
                  -14.98,
                  -50.23,
                  1098.42
                ],
                [
                  -10.93,
                  -54.36,
                  1096.7
                ],
                [
                  -6.6,
                  -59.73,
                  1096.16
                ],
                [
                  -1.63,
                  -65.81,
                  1095.59
                ],
                [
                  3.45,
                  -71.58,
                  1093.17
                ],
                [
                  8.68,
                  -77.48,
                  1090.49
                ],
                [
                  14.19,
                  -84.35,
                  1089.86
                ],
                [
                  19.97,
                  -90.89,
                  1088.25
                ],
                [
                  26.01,
                  -97.9,
                  1087.5
                ],
                [
                  32.38,
                  -104.44,
                  1085.76
                ],
                [
                  39.0,
                  -110.56,
                  1083.55
                ],
                [
                  44.48,
                  -115.87,
                  1082.42
                ],
                [
                  48.97,
                  -117.17,
                  1081.7
                ],
                [
                  53.28,
                  -117.33,
                  1080.95
                ],
                [
                  57.52,
                  -116.92,
                  1080.16
                ],
                [
                  61.23,
                  -117.45,
                  1079.24
                ],
                [
                  64.56,
                  -117.76,
                  1077.96
                ],
                [
                  67.74,
                  -118.05,
                  1076.51
                ],
                [
                  70.43,
                  -118.46,
                  1075.25
                ],
                [
                  73.28,
                  -119.85,
                  1073.08
                ],
                [
                  75.72,
                  -122.58,
                  1069.86
                ],
                [
                  77.7,
                  -125.47,
                  1066.89
                ],
                [
                  79.18,
                  -128.51,
                  1063.84
                ],
                [
                  80.32,
                  -132.13,
                  1060.32
                ],
                [
                  80.59,
                  -136.05,
                  1056.78
                ],
                [
                  80.81,
                  -140.54,
                  1052.43
                ],
                [
                  80.58,
                  -143.09,
                  1050.8
                ],
                [
                  80.55,
                  -144.11,
                  1050.75
                ],
                [
                  80.39,
                  -144.96,
                  1049.42
                ],
                [
                  80.22,
                  -145.72,
                  1047.88
                ],
                [
                  80.04,
                  -146.37,
                  1046.5
                ],
                [
                  79.72,
                  -146.89,
                  1044.59
                ],
                [
                  79.08,
                  -147.35,
                  1041.82
                ],
                [
                  77.19,
                  -148.03,
                  1034.82
                ],
                [
                  76.24,
                  -147.83,
                  1030.04
                ],
                [
                  76.08,
                  -147.06,
                  1030.53
                ],
                [
                  75.92,
                  -145.75,
                  1030.76
                ],
                [
                  75.61,
                  -143.1,
                  1031.12
                ],
                [
                  74.78,
                  -139.27,
                  1031.49
                ],
                [
                  72.88,
                  -135.13,
                  1031.84
                ],
                [
                  70.71,
                  -130.66,
                  1032.2
                ],
                [
                  69.28,
                  -125.62,
                  1032.65
                ],
                [
                  68.11,
                  -120.28,
                  1033.15
                ],
                [
                  66.77,
                  -114.7,
                  1033.67
                ],
                [
                  65.17,
                  -108.96,
                  1034.2
                ],
                [
                  63.36,
                  -101.93,
                  1034.67
                ],
                [
                  61.85,
                  -94.12,
                  1035.05
                ],
                [
                  60.8,
                  -86.29,
                  1035.4
                ],
                [
                  60.13,
                  -78.44,
                  1035.69
                ],
                [
                  59.74,
                  -70.5,
                  1035.92
                ],
                [
                  59.78,
                  -62.25,
                  1036.06
                ],
                [
                  60.0,
                  -53.89,
                  1036.16
                ],
                [
                  60.42,
                  -45.64,
                  1036.23
                ],
                [
                  61.07,
                  -37.47,
                  1036.3
                ],
                [
                  61.92,
                  -29.31,
                  1036.38
                ],
                [
                  62.89,
                  -21.12,
                  1036.43
                ],
                [
                  63.86,
                  -12.83,
                  1036.46
                ],
                [
                  64.79,
                  -4.43,
                  1036.45
                ],
                [
                  65.63,
                  4.09,
                  1036.4
                ],
                [
                  66.43,
                  11.75,
                  1036.4
                ],
                [
                  66.36,
                  15.84,
                  1036.28
                ],
                [
                  65.52,
                  19.49,
                  1035.78
                ],
                [
                  63.81,
                  23.35,
                  1035.25
                ],
                [
                  62.45,
                  25.65,
                  1034.86
                ],
                [
                  60.57,
                  28.51,
                  1034.52
                ],
                [
                  58.17,
                  33.43,
                  1033.54
                ],
                [
                  56.33,
                  38.25,
                  1033.43
                ],
                [
                  55.39,
                  41.98,
                  1034.44
                ],
                [
                  54.97,
                  44.37,
                  1036.79
                ]
              ]
            }
          }
        }
      }
    },
    "lambda_f_nom": [
      [
        23.2031,
        0.0,
        -15.284
      ],
      [
        0.0,
        12.205,
        0.0
      ],
      [
        -15.284,
        0.0,
        23.1554
      ]
    ],
    "elapsed_sec": 3780.18
  },
  "exp5_nom": {
    "rows": [
      {
        "suite": "libero_spatial",
        "n_action_steps": 32,
        "drift": 0.0,
        "enable_fb": false,
        "n_episodes": 50,
        "success_rate": 0.68,
        "replan_calls_per_ep": 9.0,
        "est_action_tokens_per_ep": 396.9,
        "wall_sec": 2444.3
      },
      {
        "suite": "libero_spatial",
        "n_action_steps": 16,
        "drift": 0.0,
        "enable_fb": false,
        "n_episodes": 50,
        "success_rate": 0.76,
        "replan_calls_per_ep": 16.2,
        "est_action_tokens_per_ep": 714.4,
        "wall_sec": 2500.7
      }
    ],
    "elapsed_sec": 5013.8
  },
  "exp5_drift_nofb": {
    "rows": [
      {
        "suite": "libero_spatial",
        "n_action_steps": 32,
        "drift": 0.07,
        "enable_fb": false,
        "n_episodes": 50,
        "success_rate": 0.32,
        "replan_calls_per_ep": 9.0,
        "est_action_tokens_per_ep": 396.9,
        "wall_sec": 1609.5
      },
      {
        "suite": "libero_spatial",
        "n_action_steps": 16,
        "drift": 0.07,
        "enable_fb": false,
        "n_episodes": 50,
        "success_rate": 0.66,
        "replan_calls_per_ep": 18.0,
        "est_action_tokens_per_ep": 793.8,
        "wall_sec": 2253.1
      }
    ],
    "elapsed_sec": 3931.0
  },
  "exp5_drift_fb": {
    "rows": [
      {
        "suite": "libero_spatial",
        "n_action_steps": 32,
        "drift": 0.07,
        "enable_fb": true,
        "n_episodes": 50,
        "success_rate": 0.52,
        "replan_calls_per_ep": 9.0,
        "est_action_tokens_per_ep": 396.9,
        "wall_sec": 1126.3
      },
      {
        "suite": "libero_spatial",
        "n_action_steps": 16,
        "drift": 0.07,
        "enable_fb": true,
        "n_episodes": 50,
        "success_rate": 0.6,
        "replan_calls_per_ep": 18.0,
        "est_action_tokens_per_ep": 793.8,
        "wall_sec": 2381.0
      },
      {
        "suite": "libero_spatial",
        "n_action_steps": 8,
        "drift": 0.07,
        "enable_fb": true,
        "n_episodes": 50,
        "success_rate": 0.64,
        "replan_calls_per_ep": 35.0,
        "est_action_tokens_per_ep": 1543.5,
        "wall_sec": 2770.6
      }
    ]
  },
  "exp6_morph": {
    "n_windows": 200,
    "budgets_pct": [
      15,
      25,
      35,
      50,
      65,
      80,
      100
    ],
    "hero_gt_xyz_mm": [
      [
        3.08,
        35.49,
        8.97
      ],
      [
        5.22,
        71.52,
        16.74
      ],
      [
        5.22,
        107.95,
        22.63
      ],
      [
        5.22,
        144.51,
        27.59
      ],
      [
        5.22,
        180.94,
        31.74
      ],
      [
        5.22,
        217.9,
        36.43
      ],
      [
        5.22,
        254.87,
        43.39
      ],
      [
        5.22,
        291.43,
        51.16
      ],
      [
        5.22,
        327.86,
        58.93
      ],
      [
        5.22,
        364.02,
        65.36
      ],
      [
        5.22,
        399.91,
        70.04
      ],
      [
        5.22,
        435.94,
        73.79
      ],
      [
        5.22,
        472.9,
        77.68
      ],
      [
        5.22,
        509.87,
        82.63
      ],
      [
        5.22,
        546.83,
        90.4
      ],
      [
        5.22,
        583.93,
        100.31
      ],
      [
        5.22,
        620.89,
        110.62
      ],
      [
        5.62,
        657.86,
        120.8
      ],
      [
        6.03,
        694.82,
        130.85
      ],
      [
        6.43,
        731.65,
        140.22
      ],
      [
        6.83,
        768.35,
        148.93
      ],
      [
        6.83,
        805.04,
        156.03
      ],
      [
        6.83,
        841.74,
        159.11
      ],
      [
        6.83,
        878.71,
        159.11
      ],
      [
        6.83,
        916.34,
        153.35
      ],
      [
        6.43,
        953.17,
        143.3
      ],
      [
        4.42,
        987.72,
        128.44
      ],
      [
        1.47,
        1015.58,
        108.08
      ],
      [
        -1.07,
        1035.27,
        87.99
      ],
      [
        -2.41,
        1048.66,
        70.98
      ],
      [
        -2.41,
        1059.24,
        56.79
      ],
      [
        -2.41,
        1067.14,
        49.55
      ]
    ],
    "codecs": {
      "Cover (EEF)": {
        "mean_full_tokens": 46.3,
        "curve": [
          {
            "budget_pct": 15,
            "mean_tokens": 7.0,
            "mae_first16_mm": 112.21,
            "mae_full32_mm": 274.59,
            "valid_rate": 0.99
          },
          {
            "budget_pct": 25,
            "mean_tokens": 11.6,
            "mae_first16_mm": 56.69,
            "mae_full32_mm": 213.23,
            "valid_rate": 1.0
          },
          {
            "budget_pct": 35,
            "mean_tokens": 16.3,
            "mae_first16_mm": 23.5,
            "mae_full32_mm": 163.22,
            "valid_rate": 1.0
          },
          {
            "budget_pct": 50,
            "mean_tokens": 23.2,
            "mae_first16_mm": 4.95,
            "mae_full32_mm": 96.38,
            "valid_rate": 1.0
          },
          {
            "budget_pct": 65,
            "mean_tokens": 30.1,
            "mae_first16_mm": 4.59,
            "mae_full32_mm": 51.78,
            "valid_rate": 1.0
          },
          {
            "budget_pct": 80,
            "mean_tokens": 37.1,
            "mae_first16_mm": 4.59,
            "mae_full32_mm": 20.55,
            "valid_rate": 1.0
          },
          {
            "budget_pct": 100,
            "mean_tokens": 46.3,
            "mae_first16_mm": 4.59,
            "mae_full32_mm": 4.72,
            "valid_rate": 1.0
          }
        ],
        "hero_morph_xyz_mm": {
          "15": [
            [
              0.0,
              40.0,
              10.0
            ],
            [
              10.0,
              70.0,
              20.0
            ],
            [
              10.0,
              110.0,
              20.0
            ],
            [
              10.0,
              140.0,
              30.0
            ],
            [
              10.0,
              140.0,
              30.0
            ],
            [
              10.0,
              140.0,
              30.0
            ],
            [
              10.0,
              170.0,
              30.0
            ],
            [
              10.0,
              170.0,
              30.0
            ],
            [
              10.0,
              170.0,
              30.0
            ],
            [
              10.0,
              170.0,
              30.0
            ],
            [
              10.0,
              170.0,
              30.0
            ],
            [
              10.0,
              170.0,
              30.0
            ],
            [
              10.0,
              170.0,
              30.0
            ],
            [
              10.0,
              170.0,
              30.0
            ],
            [
              10.0,
              170.0,
              30.0
            ],
            [
              10.0,
              170.0,
              30.0
            ],
            [
              10.0,
              170.0,
              30.0
            ],
            [
              10.0,
              170.0,
              30.0
            ],
            [
              10.0,
              170.0,
              30.0
            ],
            [
              10.0,
              170.0,
              30.0
            ],
            [
              10.0,
              170.0,
              30.0
            ],
            [
              10.0,
              170.0,
              30.0
            ],
            [
              10.0,
              170.0,
              30.0
            ],
            [
              10.0,
              170.0,
              30.0
            ],
            [
              10.0,
              170.0,
              30.0
            ],
            [
              10.0,
              170.0,
              30.0
            ],
            [
              10.0,
              170.0,
              30.0
            ],
            [
              10.0,
              170.0,
              30.0
            ],
            [
              10.0,
              170.0,
              30.0
            ],
            [
              10.0,
              170.0,
              30.0
            ],
            [
              10.0,
              170.0,
              30.0
            ],
            [
              10.0,
              170.0,
              30.0
            ]
          ],
          "25": [
            [
              0.0,
              40.0,
              10.0
            ],
            [
              10.0,
              70.0,
              20.0
            ],
            [
              10.0,
              110.0,
              20.0
            ],
            [
              10.0,
              140.0,
              30.0
            ],
            [
              10.0,
              180.0,
              30.0
            ],
            [
              10.0,
              220.0,
              40.0
            ],
            [
              10.0,
              250.0,
              40.0
            ],
            [
              10.0,
              250.0,
              40.0
            ],
            [
              10.0,
              290.0,
              50.0
            ],
            [
              10.0,
              290.0,
              50.0
            ],
            [
              10.0,
              290.0,
              50.0
            ],
            [
              10.0,
              290.0,
              50.0
            ],
            [
              10.0,
              290.0,
              50.0
            ],
            [
              10.0,
              290.0,
              50.0
            ],
            [
              10.0,
              290.0,
              50.0
            ],
            [
              10.0,
              290.0,
              50.0
            ],
            [
              10.0,
              290.0,
              50.0
            ],
            [
              10.0,
              290.0,
              50.0
            ],
            [
              10.0,
              290.0,
              50.0
            ],
            [
              10.0,
              290.0,
              50.0
            ],
            [
              10.0,
              290.0,
              50.0
            ],
            [
              10.0,
              290.0,
              50.0
            ],
            [
              10.0,
              290.0,
              50.0
            ],
            [
              10.0,
              290.0,
              50.0
            ],
            [
              10.0,
              290.0,
              50.0
            ],
            [
              10.0,
              290.0,
              50.0
            ],
            [
              10.0,
              290.0,
              50.0
            ],
            [
              10.0,
              290.0,
              50.0
            ],
            [
              10.0,
              290.0,
              50.0
            ],
            [
              10.0,
              290.0,
              50.0
            ],
            [
              10.0,
              290.0,
              50.0
            ],
            [
              10.0,
              290.0,
              50.0
            ]
          ],
          "35": [
            [
              0.0,
              40.0,
              10.0
            ],
            [
              10.0,
              70.0,
              20.0
            ],
            [
              10.0,
              110.0,
              20.0
            ],
            [
              10.0,
              140.0,
              30.0
            ],
            [
              10.0,
              180.0,
              30.0
            ],
            [
              10.0,
              220.0,
              40.0
            ],
            [
              10.0,
              250.0,
              40.0
            ],
            [
              10.0,
              290.0,
              50.0
            ],
            [
              10.0,
              330.0,
              60.0
            ],
            [
              10.0,
              360.0,
              70.0
            ],
            [
              10.0,
              400.0,
              70.0
            ],
            [
              10.0,
              440.0,
              70.0
            ],
            [
              10.0,
              440.0,
              70.0
            ],
            [
              10.0,
              440.0,
              70.0
            ],
            [
              10.0,
              440.0,
              70.0
            ],
            [
              10.0,
              440.0,
              70.0
            ],
            [
              10.0,
              440.0,
              70.0
            ],
            [
              10.0,
              440.0,
              70.0
            ],
            [
              10.0,
              440.0,
              70.0
            ],
            [
              10.0,
              440.0,
              70.0
            ],
            [
              10.0,
              440.0,
              70.0
            ],
            [
              10.0,
              440.0,
              70.0
            ],
            [
              10.0,
              440.0,
              70.0
            ],
            [
              10.0,
              440.0,
              70.0
            ],
            [
              10.0,
              440.0,
              70.0
            ],
            [
              10.0,
              440.0,
              70.0
            ],
            [
              10.0,
              440.0,
              70.0
            ],
            [
              10.0,
              440.0,
              70.0
            ],
            [
              10.0,
              440.0,
              70.0
            ],
            [
              10.0,
              440.0,
              70.0
            ],
            [
              10.0,
              440.0,
              70.0
            ],
            [
              10.0,
              440.0,
              70.0
            ]
          ],
          "50": [
            [
              0.0,
              40.0,
              10.0
            ],
            [
              10.0,
              70.0,
              20.0
            ],
            [
              10.0,
              110.0,
              20.0
            ],
            [
              10.0,
              140.0,
              30.0
            ],
            [
              10.0,
              180.0,
              30.0
            ],
            [
              10.0,
              220.0,
              40.0
            ],
            [
              10.0,
              250.0,
              40.0
            ],
            [
              10.0,
              290.0,
              50.0
            ],
            [
              10.0,
              330.0,
              60.0
            ],
            [
              10.0,
              360.0,
              70.0
            ],
            [
              10.0,
              400.0,
              70.0
            ],
            [
              10.0,
              440.0,
              70.0
            ],
            [
              10.0,
              470.0,
              80.0
            ],
            [
              10.0,
              510.0,
              80.0
            ],
            [
              10.0,
              550.0,
              90.0
            ],
            [
              10.0,
              580.0,
              100.0
            ],
            [
              10.0,
              620.0,
              110.0
            ],
            [
              10.0,
              660.0,
              120.0
            ],
            [
              10.0,
              690.0,
              130.0
            ],
            [
              10.0,
              690.0,
              130.0
            ],
            [
              10.0,
              690.0,
              130.0
            ],
            [
              10.0,
              690.0,
              130.0
            ],
            [
              10.0,
              690.0,
              130.0
            ],
            [
              10.0,
              690.0,
              130.0
            ],
            [
              10.0,
              690.0,
              130.0
            ],
            [
              10.0,
              690.0,
              130.0
            ],
            [
              10.0,
              690.0,
              130.0
            ],
            [
              10.0,
              690.0,
              130.0
            ],
            [
              10.0,
              690.0,
              130.0
            ],
            [
              10.0,
              690.0,
              130.0
            ],
            [
              10.0,
              690.0,
              130.0
            ],
            [
              10.0,
              690.0,
              130.0
            ]
          ],
          "65": [
            [
              0.0,
              40.0,
              10.0
            ],
            [
              10.0,
              70.0,
              20.0
            ],
            [
              10.0,
              110.0,
              20.0
            ],
            [
              10.0,
              140.0,
              30.0
            ],
            [
              10.0,
              180.0,
              30.0
            ],
            [
              10.0,
              220.0,
              40.0
            ],
            [
              10.0,
              250.0,
              40.0
            ],
            [
              10.0,
              290.0,
              50.0
            ],
            [
              10.0,
              330.0,
              60.0
            ],
            [
              10.0,
              360.0,
              70.0
            ],
            [
              10.0,
              400.0,
              70.0
            ],
            [
              10.0,
              440.0,
              70.0
            ],
            [
              10.0,
              470.0,
              80.0
            ],
            [
              10.0,
              510.0,
              80.0
            ],
            [
              10.0,
              550.0,
              90.0
            ],
            [
              10.0,
              580.0,
              100.0
            ],
            [
              10.0,
              620.0,
              110.0
            ],
            [
              10.0,
              660.0,
              120.0
            ],
            [
              10.0,
              690.0,
              130.0
            ],
            [
              10.0,
              730.0,
              140.0
            ],
            [
              10.0,
              770.0,
              150.0
            ],
            [
              10.0,
              810.0,
              160.0
            ],
            [
              10.0,
              840.0,
              160.0
            ],
            [
              10.0,
              840.0,
              160.0
            ],
            [
              10.0,
              840.0,
              160.0
            ],
            [
              10.0,
              840.0,
              160.0
            ],
            [
              10.0,
              840.0,
              160.0
            ],
            [
              10.0,
              840.0,
              160.0
            ],
            [
              10.0,
              840.0,
              160.0
            ],
            [
              10.0,
              840.0,
              160.0
            ],
            [
              10.0,
              840.0,
              160.0
            ],
            [
              10.0,
              840.0,
              160.0
            ]
          ],
          "80": [
            [
              0.0,
              40.0,
              10.0
            ],
            [
              10.0,
              70.0,
              20.0
            ],
            [
              10.0,
              110.0,
              20.0
            ],
            [
              10.0,
              140.0,
              30.0
            ],
            [
              10.0,
              180.0,
              30.0
            ],
            [
              10.0,
              220.0,
              40.0
            ],
            [
              10.0,
              250.0,
              40.0
            ],
            [
              10.0,
              290.0,
              50.0
            ],
            [
              10.0,
              330.0,
              60.0
            ],
            [
              10.0,
              360.0,
              70.0
            ],
            [
              10.0,
              400.0,
              70.0
            ],
            [
              10.0,
              440.0,
              70.0
            ],
            [
              10.0,
              470.0,
              80.0
            ],
            [
              10.0,
              510.0,
              80.0
            ],
            [
              10.0,
              550.0,
              90.0
            ],
            [
              10.0,
              580.0,
              100.0
            ],
            [
              10.0,
              620.0,
              110.0
            ],
            [
              10.0,
              660.0,
              120.0
            ],
            [
              10.0,
              690.0,
              130.0
            ],
            [
              10.0,
              730.0,
              140.0
            ],
            [
              10.0,
              770.0,
              150.0
            ],
            [
              10.0,
              810.0,
              160.0
            ],
            [
              10.0,
              840.0,
              160.0
            ],
            [
              10.0,
              880.0,
              160.0
            ],
            [
              10.0,
              920.0,
              150.0
            ],
            [
              10.0,
              950.0,
              140.0
            ],
            [
              10.0,
              950.0,
              140.0
            ],
            [
              10.0,
              950.0,
              140.0
            ],
            [
              10.0,
              950.0,
              140.0
            ],
            [
              10.0,
              950.0,
              140.0
            ],
            [
              10.0,
              950.0,
              140.0
            ],
            [
              10.0,
              950.0,
              140.0
            ]
          ],
          "100": [
            [
              0.0,
              40.0,
              10.0
            ],
            [
              10.0,
              70.0,
              20.0
            ],
            [
              10.0,
              110.0,
              20.0
            ],
            [
              10.0,
              140.0,
              30.0
            ],
            [
              10.0,
              180.0,
              30.0
            ],
            [
              10.0,
              220.0,
              40.0
            ],
            [
              10.0,
              250.0,
              40.0
            ],
            [
              10.0,
              290.0,
              50.0
            ],
            [
              10.0,
              330.0,
              60.0
            ],
            [
              10.0,
              360.0,
              70.0
            ],
            [
              10.0,
              400.0,
              70.0
            ],
            [
              10.0,
              440.0,
              70.0
            ],
            [
              10.0,
              470.0,
              80.0
            ],
            [
              10.0,
              510.0,
              80.0
            ],
            [
              10.0,
              550.0,
              90.0
            ],
            [
              10.0,
              580.0,
              100.0
            ],
            [
              10.0,
              620.0,
              110.0
            ],
            [
              10.0,
              660.0,
              120.0
            ],
            [
              10.0,
              690.0,
              130.0
            ],
            [
              10.0,
              730.0,
              140.0
            ],
            [
              10.0,
              770.0,
              150.0
            ],
            [
              10.0,
              810.0,
              160.0
            ],
            [
              10.0,
              840.0,
              160.0
            ],
            [
              10.0,
              880.0,
              160.0
            ],
            [
              10.0,
              920.0,
              150.0
            ],
            [
              10.0,
              950.0,
              140.0
            ],
            [
              0.0,
              990.0,
              130.0
            ],
            [
              0.0,
              1020.0,
              110.0
            ],
            [
              0.0,
              1040.0,
              90.0
            ],
            [
              0.0,
              1050.0,
              70.0
            ],
            [
              0.0,
              1060.0,
              60.0
            ],
            [
              0.0,
              1070.0,
              50.0
            ]
          ]
        }
      },
      "OAT": {
        "mean_full_tokens": 16.0,
        "curve": [
          {
            "budget_pct": 15,
            "mean_tokens": 2.0,
            "mae_first16_mm": 50.88,
            "mae_full32_mm": 73.0,
            "valid_rate": 1.0
          },
          {
            "budget_pct": 25,
            "mean_tokens": 4.0,
            "mae_first16_mm": 26.66,
            "mae_full32_mm": 48.78,
            "valid_rate": 1.0
          },
          {
            "budget_pct": 35,
            "mean_tokens": 6.0,
            "mae_first16_mm": 25.51,
            "mae_full32_mm": 45.9,
            "valid_rate": 1.0
          },
          {
            "budget_pct": 50,
            "mean_tokens": 8.0,
            "mae_first16_mm": 25.24,
            "mae_full32_mm": 38.27,
            "valid_rate": 1.0
          },
          {
            "budget_pct": 65,
            "mean_tokens": 10.0,
            "mae_first16_mm": 30.42,
            "mae_full32_mm": 46.58,
            "valid_rate": 1.0
          },
          {
            "budget_pct": 80,
            "mean_tokens": 13.0,
            "mae_first16_mm": 33.75,
            "mae_full32_mm": 48.13,
            "valid_rate": 1.0
          },
          {
            "budget_pct": 100,
            "mean_tokens": 16.0,
            "mae_first16_mm": 19.61,
            "mae_full32_mm": 28.96,
            "valid_rate": 1.0
          }
        ],
        "hero_morph_xyz_mm": {
          "15": [
            [
              -4.86,
              27.12,
              -1.87
            ],
            [
              -8.31,
              54.65,
              -2.58
            ],
            [
              -11.5,
              81.97,
              -1.15
            ],
            [
              -13.73,
              108.49,
              1.09
            ],
            [
              -17.27,
              136.11,
              1.67
            ],
            [
              -19.06,
              162.84,
              2.96
            ],
            [
              -20.67,
              189.28,
              4.35
            ],
            [
              -21.96,
              218.53,
              5.73
            ],
            [
              -23.62,
              248.1,
              8.77
            ],
            [
              -21.99,
              275.61,
              14.09
            ],
            [
              -23.04,
              304.31,
              18.33
            ],
            [
              -23.39,
              332.46,
              23.04
            ],
            [
              -23.34,
              361.58,
              29.37
            ],
            [
              -22.59,
              390.99,
              34.59
            ],
            [
              -22.39,
              421.97,
              39.76
            ],
            [
              -21.54,
              452.71,
              46.48
            ],
            [
              -22.12,
              484.88,
              47.94
            ],
            [
              -22.01,
              518.06,
              49.81
            ],
            [
              -20.99,
              550.38,
              51.91
            ],
            [
              -20.14,
              583.65,
              53.54
            ],
            [
              -19.47,
              618.58,
              52.15
            ],
            [
              -21.31,
              654.99,
              43.42
            ],
            [
              -20.8,
              689.42,
              38.66
            ],
            [
              -20.3,
              723.51,
              33.26
            ],
            [
              -22.33,
              758.96,
              23.21
            ],
            [
              -25.29,
              791.73,
              7.76
            ],
            [
              -28.04,
              821.42,
              -8.97
            ],
            [
              -30.73,
              848.99,
              -26.52
            ],
            [
              -33.94,
              875.21,
              -41.26
            ],
            [
              -35.63,
              895.28,
              -53.45
            ],
            [
              -36.64,
              914.08,
              -64.3
            ],
            [
              -37.11,
              929.82,
              -72.26
            ]
          ],
          "25": [
            [
              1.21,
              33.52,
              2.21
            ],
            [
              2.02,
              66.45,
              5.37
            ],
            [
              1.88,
              98.68,
              8.4
            ],
            [
              3.43,
              132.03,
              10.94
            ],
            [
              4.96,
              165.44,
              16.01
            ],
            [
              4.9,
              199.77,
              20.81
            ],
            [
              6.22,
              234.97,
              27.13
            ],
            [
              6.83,
              269.34,
              32.57
            ],
            [
              7.23,
              304.23,
              37.79
            ],
            [
              7.85,
              340.28,
              42.66
            ],
            [
              10.13,
              376.76,
              48.27
            ],
            [
              12.28,
              413.05,
              53.59
            ],
            [
              13.53,
              449.15,
              59.63
            ],
            [
              15.69,
              485.24,
              65.73
            ],
            [
              16.74,
              520.91,
              68.22
            ],
            [
              17.91,
              556.58,
              75.02
            ],
            [
              19.95,
              592.33,
              81.78
            ],
            [
              22.8,
              627.54,
              88.77
            ],
            [
              23.19,
              663.83,
              94.25
            ],
            [
              25.27,
              699.33,
              98.3
            ],
            [
              26.18,
              737.37,
              96.73
            ],
            [
              25.17,
              773.6,
              90.93
            ],
            [
              24.39,
              810.22,
              84.44
            ],
            [
              22.78,
              845.15,
              81.19
            ],
            [
              21.59,
              880.5,
              70.43
            ],
            [
              20.73,
              912.54,
              60.72
            ],
            [
              19.44,
              940.93,
              49.52
            ],
            [
              19.11,
              966.92,
              35.38
            ],
            [
              21.95,
              983.96,
              29.6
            ],
            [
              23.55,
              996.86,
              24.23
            ],
            [
              24.68,
              1007.13,
              21.64
            ],
            [
              24.82,
              1014.15,
              18.7
            ]
          ],
          "35": [
            [
              0.12,
              32.0,
              3.05
            ],
            [
              0.55,
              66.02,
              6.12
            ],
            [
              1.22,
              99.59,
              9.06
            ],
            [
              1.62,
              133.92,
              12.94
            ],
            [
              2.95,
              168.87,
              16.84
            ],
            [
              4.8,
              202.87,
              22.86
            ],
            [
              5.78,
              237.66,
              28.33
            ],
            [
              6.32,
              272.55,
              34.33
            ],
            [
              8.21,
              308.03,
              39.68
            ],
            [
              8.76,
              344.2,
              46.68
            ],
            [
              8.14,
              380.53,
              51.21
            ],
            [
              8.57,
              417.59,
              57.36
            ],
            [
              8.5,
              454.64,
              64.11
            ],
            [
              9.61,
              492.29,
              70.13
            ],
            [
              10.13,
              528.0,
              79.09
            ],
            [
              10.41,
              563.96,
              86.82
            ],
            [
              11.71,
              600.03,
              95.43
            ],
            [
              12.18,
              636.62,
              103.02
            ],
            [
              13.17,
              672.69,
              111.39
            ],
            [
              14.11,
              708.01,
              118.6
            ],
            [
              15.25,
              744.29,
              122.57
            ],
            [
              16.93,
              780.61,
              122.14
            ],
            [
              18.16,
              816.02,
              121.39
            ],
            [
              18.73,
              851.81,
              119.04
            ],
            [
              19.05,
              886.47,
              116.49
            ],
            [
              20.4,
              920.01,
              112.06
            ],
            [
              21.1,
              954.2,
              108.23
            ],
            [
              19.82,
              992.14,
              99.55
            ],
            [
              16.91,
              1030.36,
              87.1
            ],
            [
              11.22,
              1062.2,
              73.63
            ],
            [
              10.38,
              1076.83,
              68.11
            ],
            [
              7.07,
              1086.92,
              58.09
            ]
          ],
          "50": [
            [
              1.13,
              32.6,
              3.24
            ],
            [
              0.51,
              66.03,
              6.35
            ],
            [
              1.46,
              100.06,
              8.3
            ],
            [
              3.22,
              134.66,
              13.63
            ],
            [
              3.78,
              169.11,
              18.52
            ],
            [
              4.26,
              204.03,
              23.92
            ],
            [
              6.99,
              239.37,
              29.13
            ],
            [
              8.69,
              274.45,
              35.14
            ],
            [
              8.12,
              310.14,
              40.27
            ],
            [
              9.02,
              346.42,
              45.94
            ],
            [
              9.48,
              382.61,
              52.32
            ],
            [
              10.58,
              418.74,
              59.29
            ],
            [
              10.98,
              454.68,
              66.48
            ],
            [
              11.13,
              490.59,
              74.41
            ],
            [
              10.35,
              525.27,
              80.36
            ],
            [
              12.14,
              561.42,
              89.71
            ],
            [
              15.13,
              597.53,
              98.24
            ],
            [
              16.84,
              633.79,
              106.51
            ],
            [
              19.98,
              669.69,
              115.54
            ],
            [
              22.37,
              705.08,
              120.64
            ],
            [
              25.74,
              740.64,
              124.14
            ],
            [
              28.27,
              776.31,
              125.28
            ],
            [
              31.14,
              811.08,
              123.85
            ],
            [
              33.44,
              846.43,
              123.97
            ],
            [
              36.36,
              881.75,
              119.67
            ],
            [
              37.24,
              915.27,
              111.8
            ],
            [
              38.98,
              944.2,
              103.72
            ],
            [
              39.21,
              972.85,
              93.24
            ],
            [
              39.0,
              995.92,
              83.25
            ],
            [
              38.32,
              1017.9,
              72.73
            ],
            [
              38.87,
              1034.16,
              68.06
            ],
            [
              40.82,
              1044.21,
              65.75
            ]
          ],
          "65": [
            [
              2.04,
              33.79,
              4.46
            ],
            [
              3.19,
              66.32,
              7.7
            ],
            [
              6.79,
              98.46,
              11.47
            ],
            [
              10.44,
              131.27,
              14.81
            ],
            [
              12.58,
              165.86,
              20.79
            ],
            [
              14.86,
              201.98,
              26.41
            ],
            [
              19.17,
              236.81,
              33.44
            ],
            [
              23.05,
              272.85,
              41.28
            ],
            [
              27.81,
              309.19,
              47.45
            ],
            [
              30.88,
              345.49,
              52.37
            ],
            [
              34.03,
              383.02,
              57.95
            ],
            [
              37.76,
              420.58,
              63.68
            ],
            [
              40.49,
              457.82,
              71.03
            ],
            [
              41.2,
              494.63,
              77.95
            ],
            [
              42.67,
              531.6,
              85.21
            ],
            [
              44.45,
              569.19,
              93.55
            ],
            [
              48.18,
              606.16,
              103.98
            ],
            [
              51.65,
              642.66,
              112.37
            ],
            [
              55.03,
              679.58,
              121.79
            ],
            [
              58.79,
              716.18,
              129.64
            ],
            [
              62.19,
              752.93,
              135.55
            ],
            [
              66.18,
              789.27,
              138.01
            ],
            [
              69.22,
              824.19,
              136.93
            ],
            [
              72.31,
              858.18,
              135.39
            ],
            [
              75.01,
              892.19,
              130.49
            ],
            [
              77.65,
              924.77,
              124.32
            ],
            [
              78.76,
              954.54,
              113.73
            ],
            [
              79.08,
              981.26,
              102.41
            ],
            [
              79.27,
              1000.92,
              92.95
            ],
            [
              78.39,
              1018.39,
              83.95
            ],
            [
              79.34,
              1031.1,
              75.66
            ],
            [
              79.64,
              1040.6,
              68.5
            ]
          ],
          "80": [
            [
              3.8,
              32.38,
              1.79
            ],
            [
              6.84,
              65.09,
              6.36
            ],
            [
              9.81,
              98.02,
              9.93
            ],
            [
              13.64,
              131.43,
              14.74
            ],
            [
              17.84,
              165.27,
              19.62
            ],
            [
              20.26,
              201.15,
              25.17
            ],
            [
              22.71,
              236.73,
              30.77
            ],
            [
              24.71,
              272.57,
              35.21
            ],
            [
              27.66,
              308.82,
              39.6
            ],
            [
              30.09,
              344.78,
              44.1
            ],
            [
              32.65,
              381.05,
              48.15
            ],
            [
              36.63,
              418.39,
              52.23
            ],
            [
              38.9,
              456.4,
              56.75
            ],
            [
              41.77,
              494.16,
              61.89
            ],
            [
              44.63,
              532.22,
              66.76
            ],
            [
              48.08,
              569.75,
              74.04
            ],
            [
              50.54,
              606.75,
              81.9
            ],
            [
              51.99,
              644.05,
              91.07
            ],
            [
              53.88,
              681.01,
              100.01
            ],
            [
              55.62,
              718.23,
              107.54
            ],
            [
              56.42,
              754.41,
              114.21
            ],
            [
              57.45,
              790.77,
              118.8
            ],
            [
              58.95,
              823.2,
              120.15
            ],
            [
              62.85,
              856.88,
              118.51
            ],
            [
              64.8,
              890.61,
              112.85
            ],
            [
              67.09,
              922.89,
              105.94
            ],
            [
              69.06,
              952.59,
              95.17
            ],
            [
              70.91,
              976.73,
              85.43
            ],
            [
              70.67,
              997.76,
              74.61
            ],
            [
              71.15,
              1013.35,
              63.8
            ],
            [
              72.48,
              1024.58,
              56.14
            ],
            [
              73.13,
              1034.42,
              49.04
            ]
          ],
          "100": [
            [
              2.27,
              35.19,
              3.91
            ],
            [
              4.09,
              71.82,
              8.21
            ],
            [
              6.69,
              107.51,
              11.35
            ],
            [
              8.48,
              143.93,
              17.24
            ],
            [
              8.82,
              181.32,
              22.54
            ],
            [
              10.41,
              217.86,
              28.53
            ],
            [
              11.08,
              253.68,
              32.7
            ],
            [
              12.17,
              289.17,
              39.65
            ],
            [
              12.44,
              324.96,
              46.7
            ],
            [
              12.24,
              361.76,
              53.08
            ],
            [
              12.42,
              399.38,
              60.16
            ],
            [
              11.64,
              437.95,
              67.65
            ],
            [
              11.55,
              476.61,
              74.12
            ],
            [
              11.45,
              515.5,
              81.34
            ],
            [
              11.47,
              555.03,
              90.37
            ],
            [
              12.52,
              593.13,
              98.8
            ],
            [
              13.55,
              632.11,
              108.59
            ],
            [
              14.39,
              670.42,
              118.0
            ],
            [
              14.62,
              707.24,
              128.14
            ],
            [
              13.61,
              745.18,
              135.83
            ],
            [
              12.79,
              781.9,
              144.1
            ],
            [
              12.15,
              817.12,
              148.92
            ],
            [
              11.81,
              852.69,
              150.39
            ],
            [
              12.47,
              887.92,
              148.44
            ],
            [
              13.2,
              922.37,
              144.09
            ],
            [
              13.9,
              956.12,
              135.53
            ],
            [
              14.55,
              983.64,
              125.97
            ],
            [
              15.32,
              1008.06,
              116.66
            ],
            [
              15.36,
              1026.95,
              106.78
            ],
            [
              15.31,
              1042.24,
              95.53
            ],
            [
              16.68,
              1055.71,
              88.29
            ],
            [
              17.88,
              1063.83,
              83.32
            ]
          ]
        }
      },
      "FAST": {
        "mean_full_tokens": 42.4,
        "curve": [
          {
            "budget_pct": 15,
            "mean_tokens": 6.3,
            "mae_first16_mm": 88.9,
            "mae_full32_mm": 86.85,
            "valid_rate": 1.0
          },
          {
            "budget_pct": 25,
            "mean_tokens": 10.6,
            "mae_first16_mm": 34.32,
            "mae_full32_mm": 32.62,
            "valid_rate": 1.0
          },
          {
            "budget_pct": 35,
            "mean_tokens": 14.8,
            "mae_first16_mm": 14.99,
            "mae_full32_mm": 16.91,
            "valid_rate": 1.0
          },
          {
            "budget_pct": 50,
            "mean_tokens": 21.2,
            "mae_first16_mm": 8.02,
            "mae_full32_mm": 10.5,
            "valid_rate": 1.0
          },
          {
            "budget_pct": 65,
            "mean_tokens": 27.5,
            "mae_first16_mm": 6.57,
            "mae_full32_mm": 8.97,
            "valid_rate": 1.0
          },
          {
            "budget_pct": 80,
            "mean_tokens": 33.9,
            "mae_first16_mm": 5.91,
            "mae_full32_mm": 8.56,
            "valid_rate": 1.0
          },
          {
            "budget_pct": 100,
            "mean_tokens": 42.4,
            "mae_first16_mm": 5.78,
            "mae_full32_mm": 8.48,
            "valid_rate": 1.0
          }
        ],
        "hero_morph_xyz_mm": {
          "15": [
            [
              1.17,
              39.0,
              11.02
            ],
            [
              2.33,
              77.94,
              21.95
            ],
            [
              3.47,
              116.77,
              32.7
            ],
            [
              4.57,
              155.43,
              43.19
            ],
            [
              5.63,
              193.87,
              53.32
            ],
            [
              6.63,
              232.05,
              63.02
            ],
            [
              7.58,
              269.9,
              72.21
            ],
            [
              8.44,
              307.38,
              80.81
            ],
            [
              9.23,
              344.46,
              88.76
            ],
            [
              9.93,
              381.1,
              96.0
            ],
            [
              10.53,
              417.26,
              102.48
            ],
            [
              11.03,
              452.91,
              108.15
            ],
            [
              11.43,
              488.03,
              112.96
            ],
            [
              11.71,
              522.6,
              116.9
            ],
            [
              11.88,
              556.6,
              119.93
            ],
            [
              11.94,
              590.04,
              122.05
            ],
            [
              11.88,
              622.9,
              123.25
            ],
            [
              11.71,
              655.18,
              123.53
            ],
            [
              11.43,
              686.9,
              122.91
            ],
            [
              11.03,
              718.07,
              121.41
            ],
            [
              10.53,
              748.72,
              119.05
            ],
            [
              9.93,
              778.85,
              115.89
            ],
            [
              9.23,
              808.5,
              111.96
            ],
            [
              8.44,
              837.71,
              107.33
            ],
            [
              7.58,
              866.52,
              102.04
            ],
            [
              6.63,
              894.96,
              96.16
            ],
            [
              5.63,
              923.08,
              89.78
            ],
            [
              4.57,
              950.93,
              82.96
            ],
            [
              3.47,
              978.56,
              75.79
            ],
            [
              2.33,
              1006.02,
              68.36
            ],
            [
              1.17,
              1033.37,
              60.74
            ],
            [
              0.0,
              1060.66,
              53.03
            ]
          ],
          "25": [
            [
              1.17,
              37.8,
              7.5
            ],
            [
              2.33,
              75.38,
              14.88
            ],
            [
              3.47,
              112.51,
              22.04
            ],
            [
              4.57,
              149.05,
              28.89
            ],
            [
              5.63,
              184.92,
              35.42
            ],
            [
              6.63,
              220.1,
              41.63
            ],
            [
              7.58,
              254.67,
              47.59
            ],
            [
              8.44,
              288.79,
              53.41
            ],
            [
              9.23,
              322.68,
              59.23
            ],
            [
              9.93,
              356.6,
              65.2
            ],
            [
              10.53,
              390.84,
              71.48
            ],
            [
              11.03,
              425.66,
              78.2
            ],
            [
              11.43,
              461.29,
              85.44
            ],
            [
              11.71,
              497.88,
              93.21
            ],
            [
              11.88,
              535.49,
              101.47
            ],
            [
              11.94,
              574.06,
              110.07
            ],
            [
              11.88,
              613.44,
              118.78
            ],
            [
              11.71,
              653.34,
              127.29
            ],
            [
              11.43,
              693.38,
              135.23
            ],
            [
              11.03,
              733.1,
              142.18
            ],
            [
              10.53,
              772.0,
              147.7
            ],
            [
              9.93,
              809.58,
              151.37
            ],
            [
              9.23,
              845.35,
              152.79
            ],
            [
              8.44,
              878.9,
              151.66
            ],
            [
              7.58,
              909.92,
              147.78
            ],
            [
              6.63,
              938.24,
              141.05
            ],
            [
              5.63,
              963.83,
              131.52
            ],
            [
              4.57,
              986.82,
              119.39
            ],
            [
              3.47,
              1007.51,
              104.98
            ],
            [
              2.33,
              1026.33,
              88.74
            ],
            [
              1.17,
              1043.83,
              71.21
            ],
            [
              0.0,
              1060.66,
              53.03
            ]
          ],
          "35": [
            [
              1.17,
              34.36,
              8.65
            ],
            [
              2.33,
              69.0,
              17.01
            ],
            [
              3.47,
              104.19,
              24.81
            ],
            [
              4.57,
              140.04,
              31.9
            ],
            [
              5.63,
              176.59,
              38.19
            ],
            [
              6.63,
              213.73,
              43.75
            ],
            [
              7.58,
              251.22,
              48.74
            ],
            [
              8.44,
              288.79,
              53.41
            ],
            [
              9.23,
              326.13,
              58.08
            ],
            [
              9.93,
              362.97,
              63.08
            ],
            [
              10.53,
              399.17,
              68.71
            ],
            [
              11.03,
              434.67,
              75.2
            ],
            [
              11.43,
              469.61,
              82.66
            ],
            [
              11.71,
              504.25,
              91.09
            ],
            [
              11.88,
              538.94,
              100.32
            ],
            [
              11.94,
              574.06,
              110.07
            ],
            [
              11.88,
              609.99,
              119.93
            ],
            [
              11.71,
              646.97,
              129.42
            ],
            [
              11.43,
              685.05,
              138.01
            ],
            [
              11.03,
              724.09,
              145.19
            ],
            [
              10.53,
              763.68,
              150.48
            ],
            [
              9.93,
              803.21,
              153.49
            ],
            [
              9.23,
              841.9,
              153.94
            ],
            [
              8.44,
              878.9,
              151.66
            ],
            [
              7.58,
              913.37,
              146.63
            ],
            [
              6.63,
              944.61,
              138.93
            ],
            [
              5.63,
              972.15,
              128.75
            ],
            [
              4.57,
              995.83,
              116.39
            ],
            [
              3.47,
              1015.83,
              102.21
            ],
            [
              2.33,
              1032.7,
              86.61
            ],
            [
              1.17,
              1047.28,
              70.07
            ],
            [
              0.0,
              1060.66,
              53.03
            ]
          ],
          "50": [
            [
              2.29,
              34.39,
              8.62
            ],
            [
              4.19,
              69.28,
              16.72
            ],
            [
              5.45,
              105.03,
              23.97
            ],
            [
              6.0,
              141.64,
              30.3
            ],
            [
              6.02,
              178.87,
              35.92
            ],
            [
              5.86,
              216.21,
              41.27
            ],
            [
              5.9,
              253.18,
              46.79
            ],
            [
              6.43,
              289.42,
              52.79
            ],
            [
              7.55,
              324.87,
              59.34
            ],
            [
              9.16,
              359.79,
              66.27
            ],
            [
              10.93,
              394.65,
              73.23
            ],
            [
              12.46,
              429.97,
              79.9
            ],
            [
              13.41,
              466.13,
              86.15
            ],
            [
              13.58,
              503.2,
              92.14
            ],
            [
              13.01,
              540.95,
              98.31
            ],
            [
              11.94,
              578.89,
              105.25
            ],
            [
              10.76,
              616.49,
              113.43
            ],
            [
              9.85,
              653.38,
              123.01
            ],
            [
              9.45,
              689.48,
              133.58
            ],
            [
              9.61,
              725.1,
              144.18
            ],
            [
              10.14,
              760.74,
              153.42
            ],
            [
              10.7,
              796.93,
              159.76
            ],
            [
              10.91,
              833.93,
              161.91
            ],
            [
              10.46,
              871.45,
              159.11
            ],
            [
              9.25,
              908.61,
              151.39
            ],
            [
              7.41,
              944.01,
              139.53
            ],
            [
              5.24,
              976.0,
              124.9
            ],
            [
              3.14,
              1003.14,
              109.08
            ],
            [
              1.49,
              1024.59,
              93.45
            ],
            [
              0.46,
              1040.44,
              78.87
            ],
            [
              0.05,
              1051.8,
              65.55
            ],
            [
              0.0,
              1060.66,
              53.03
            ]
          ],
          "65": [
            [
              2.29,
              35.49,
              9.68
            ],
            [
              4.19,
              70.99,
              18.08
            ],
            [
              5.45,
              106.56,
              24.6
            ],
            [
              6.0,
              142.31,
              29.63
            ],
            [
              6.02,
              178.36,
              34.26
            ],
            [
              5.86,
              214.77,
              39.65
            ],
            [
              5.9,
              251.45,
              46.35
            ],
            [
              6.43,
              288.19,
              54.02
            ],
            [
              7.55,
              324.7,
              61.68
            ],
            [
              9.16,
              360.75,
              68.36
            ],
            [
              10.93,
              396.31,
              73.73
            ],
            [
              12.46,
              431.58,
              78.29
            ],
            [
              13.41,
              466.95,
              83.16
            ],
            [
              13.58,
              502.86,
              89.41
            ],
            [
              13.01,
              539.6,
              97.49
            ],
            [
              11.94,
              577.15,
              106.98
            ],
            [
              10.76,
              615.14,
              116.94
            ],
            [
              9.85,
              653.04,
              126.41
            ],
            [
              9.45,
              690.3,
              134.92
            ],
            [
              9.61,
              726.7,
              142.57
            ],
            [
              10.14,
              762.4,
              149.59
            ],
            [
              10.7,
              797.9,
              155.74
            ],
            [
              10.91,
              833.76,
              159.92
            ],
            [
              10.46,
              870.22,
              160.34
            ],
            [
              9.25,
              906.88,
              155.28
            ],
            [
              7.41,
              942.56,
              144.04
            ],
            [
              5.24,
              975.49,
              127.57
            ],
            [
              3.14,
              1003.81,
              108.41
            ],
            [
              1.49,
              1026.13,
              89.75
            ],
            [
              0.46,
              1042.15,
              74.11
            ],
            [
              0.05,
              1052.9,
              62.28
            ],
            [
              0.0,
              1060.66,
              53.03
            ]
          ],
          "80": [
            [
              2.29,
              35.49,
              8.68
            ],
            [
              4.19,
              70.99,
              17.13
            ],
            [
              5.45,
              106.56,
              24.71
            ],
            [
              6.0,
              142.31,
              30.68
            ],
            [
              6.02,
              178.36,
              35.14
            ],
            [
              5.86,
              214.77,
              39.43
            ],
            [
              5.9,
              251.45,
              45.26
            ],
            [
              6.43,
              288.19,
              53.21
            ],
            [
              7.55,
              324.7,
              62.01
            ],
            [
              9.16,
              360.75,
              69.48
            ],
            [
              10.93,
              396.31,
              74.45
            ],
            [
              12.46,
              431.58,
              77.85
            ],
            [
              13.41,
              466.95,
              82.03
            ],
            [
              13.58,
              502.86,
              88.78
            ],
            [
              13.01,
              539.6,
              98.03
            ],
            [
              11.94,
              577.15,
              108.12
            ],
            [
              10.76,
              615.14,
              117.48
            ],
            [
              9.85,
              653.04,
              125.77
            ],
            [
              9.45,
              690.3,
              133.79
            ],
            [
              9.61,
              726.7,
              142.13
            ],
            [
              10.14,
              762.4,
              150.31
            ],
            [
              10.7,
              797.9,
              156.85
            ],
            [
              10.91,
              833.76,
              160.25
            ],
            [
              10.46,
              870.22,
              159.54
            ],
            [
              9.25,
              906.88,
              154.19
            ],
            [
              7.41,
              942.56,
              143.82
            ],
            [
              5.24,
              975.49,
              128.45
            ],
            [
              3.14,
              1003.81,
              109.47
            ],
            [
              1.49,
              1026.13,
              89.86
            ],
            [
              0.46,
              1042.15,
              73.16
            ],
            [
              0.05,
              1052.9,
              61.27
            ],
            [
              0.0,
              1060.66,
              53.03
            ]
          ],
          "100": [
            [
              2.29,
              35.49,
              8.68
            ],
            [
              4.19,
              70.99,
              17.13
            ],
            [
              5.45,
              106.56,
              24.71
            ],
            [
              6.0,
              142.31,
              30.68
            ],
            [
              6.02,
              178.36,
              35.14
            ],
            [
              5.86,
              214.77,
              39.43
            ],
            [
              5.9,
              251.45,
              45.26
            ],
            [
              6.43,
              288.19,
              53.21
            ],
            [
              7.55,
              324.7,
              62.01
            ],
            [
              9.16,
              360.75,
              69.48
            ],
            [
              10.93,
              396.31,
              74.45
            ],
            [
              12.46,
              431.58,
              77.85
            ],
            [
              13.41,
              466.95,
              82.03
            ],
            [
              13.58,
              502.86,
              88.78
            ],
            [
              13.01,
              539.6,
              98.03
            ],
            [
              11.94,
              577.15,
              108.12
            ],
            [
              10.76,
              615.14,
              117.48
            ],
            [
              9.85,
              653.04,
              125.77
            ],
            [
              9.45,
              690.3,
              133.79
            ],
            [
              9.61,
              726.7,
              142.13
            ],
            [
              10.14,
              762.4,
              150.31
            ],
            [
              10.7,
              797.9,
              156.85
            ],
            [
              10.91,
              833.76,
              160.25
            ],
            [
              10.46,
              870.22,
              159.54
            ],
            [
              9.25,
              906.88,
              154.19
            ],
            [
              7.41,
              942.56,
              143.82
            ],
            [
              5.24,
              975.49,
              128.45
            ],
            [
              3.14,
              1003.81,
              109.47
            ],
            [
              1.49,
              1026.13,
              89.86
            ],
            [
              0.46,
              1042.15,
              73.16
            ],
            [
              0.05,
              1052.9,
              61.27
            ],
            [
              0.0,
              1060.66,
              53.03
            ]
          ]
        }
      },
      "QueST": {
        "mean_full_tokens": 16.0,
        "curve": [
          {
            "budget_pct": 15,
            "mean_tokens": 2.0,
            "mae_first16_mm": 409.96,
            "mae_full32_mm": 830.89,
            "valid_rate": 1.0
          },
          {
            "budget_pct": 25,
            "mean_tokens": 4.0,
            "mae_first16_mm": 321.54,
            "mae_full32_mm": 675.71,
            "valid_rate": 1.0
          },
          {
            "budget_pct": 35,
            "mean_tokens": 6.0,
            "mae_first16_mm": 236.02,
            "mae_full32_mm": 560.17,
            "valid_rate": 1.0
          },
          {
            "budget_pct": 50,
            "mean_tokens": 8.0,
            "mae_first16_mm": 128.41,
            "mae_full32_mm": 411.56,
            "valid_rate": 1.0
          },
          {
            "budget_pct": 65,
            "mean_tokens": 10.0,
            "mae_first16_mm": 71.46,
            "mae_full32_mm": 298.38,
            "valid_rate": 1.0
          },
          {
            "budget_pct": 80,
            "mean_tokens": 13.0,
            "mae_first16_mm": 46.12,
            "mae_full32_mm": 172.81,
            "valid_rate": 1.0
          },
          {
            "budget_pct": 100,
            "mean_tokens": 16.0,
            "mae_first16_mm": 24.91,
            "mae_full32_mm": 39.65,
            "valid_rate": 1.0
          }
        ],
        "hero_morph_xyz_mm": {
          "15": [
            [
              24.12,
              11.88,
              -17.52
            ],
            [
              46.65,
              14.43,
              -54.43
            ],
            [
              63.99,
              10.32,
              -101.93
            ],
            [
              79.65,
              3.22,
              -150.98
            ],
            [
              89.43,
              -6.49,
              -209.84
            ],
            [
              99.5,
              -16.61,
              -283.03
            ],
            [
              104.76,
              -18.62,
              -344.75
            ],
            [
              102.32,
              -22.59,
              -397.86
            ],
            [
              104.06,
              -27.92,
              -455.51
            ],
            [
              96.08,
              -36.5,
              -527.26
            ],
            [
              89.56,
              -40.55,
              -583.18
            ],
            [
              78.92,
              -40.19,
              -637.03
            ],
            [
              61.35,
              -43.66,
              -698.22
            ],
            [
              40.91,
              -44.74,
              -751.09
            ],
            [
              14.2,
              -42.34,
              -804.38
            ],
            [
              -12.36,
              -38.86,
              -859.89
            ],
            [
              -40.48,
              -33.23,
              -910.08
            ],
            [
              -71.76,
              -30.92,
              -969.23
            ],
            [
              -105.79,
              -24.03,
              -1021.58
            ],
            [
              -139.71,
              -20.02,
              -1072.06
            ],
            [
              -171.02,
              -11.7,
              -1120.99
            ],
            [
              -205.22,
              -3.11,
              -1170.65
            ],
            [
              -235.09,
              9.33,
              -1221.38
            ],
            [
              -268.4,
              19.3,
              -1272.54
            ],
            [
              -300.68,
              33.86,
              -1324.12
            ],
            [
              -332.76,
              46.2,
              -1375.43
            ],
            [
              -365.96,
              62.14,
              -1423.51
            ],
            [
              -400.25,
              78.05,
              -1472.92
            ],
            [
              -431.92,
              91.68,
              -1523.43
            ],
            [
              -460.77,
              109.42,
              -1573.41
            ],
            [
              -487.22,
              127.88,
              -1620.68
            ],
            [
              -514.47,
              145.68,
              -1668.19
            ]
          ],
          "25": [
            [
              12.18,
              33.08,
              3.16
            ],
            [
              21.96,
              61.17,
              4.99
            ],
            [
              26.06,
              85.03,
              1.08
            ],
            [
              27.98,
              98.71,
              -30.29
            ],
            [
              32.72,
              101.85,
              -68.47
            ],
            [
              32.02,
              96.89,
              -114.92
            ],
            [
              30.8,
              89.49,
              -163.03
            ],
            [
              29.88,
              78.74,
              -213.7
            ],
            [
              26.12,
              67.71,
              -265.29
            ],
            [
              21.77,
              56.91,
              -318.37
            ],
            [
              16.91,
              46.72,
              -374.54
            ],
            [
              6.97,
              39.57,
              -425.61
            ],
            [
              -5.44,
              29.6,
              -476.96
            ],
            [
              -20.88,
              24.64,
              -526.68
            ],
            [
              -41.17,
              21.76,
              -574.69
            ],
            [
              -64.75,
              21.22,
              -626.84
            ],
            [
              -87.69,
              19.2,
              -688.45
            ],
            [
              -112.33,
              23.12,
              -738.25
            ],
            [
              -138.47,
              30.14,
              -786.11
            ],
            [
              -169.19,
              34.91,
              -837.76
            ],
            [
              -192.79,
              43.13,
              -885.43
            ],
            [
              -220.48,
              51.95,
              -934.41
            ],
            [
              -250.49,
              65.63,
              -984.31
            ],
            [
              -277.74,
              80.2,
              -1034.0
            ],
            [
              -303.76,
              96.13,
              -1081.72
            ],
            [
              -332.25,
              114.67,
              -1132.01
            ],
            [
              -355.8,
              129.86,
              -1182.65
            ],
            [
              -382.29,
              147.64,
              -1232.74
            ],
            [
              -407.65,
              167.74,
              -1280.92
            ],
            [
              -431.69,
              189.87,
              -1329.08
            ],
            [
              -455.25,
              212.49,
              -1374.94
            ],
            [
              -478.76,
              234.72,
              -1423.87
            ]
          ],
          "35": [
            [
              -0.77,
              30.07,
              5.23
            ],
            [
              -2.24,
              60.98,
              5.46
            ],
            [
              -5.15,
              89.44,
              2.44
            ],
            [
              -7.25,
              116.84,
              -0.78
            ],
            [
              -10.58,
              135.48,
              -16.17
            ],
            [
              -13.65,
              146.44,
              -37.68
            ],
            [
              -17.45,
              155.84,
              -66.15
            ],
            [
              -24.67,
              160.38,
              -98.96
            ],
            [
              -32.62,
              160.68,
              -133.41
            ],
            [
              -40.02,
              152.65,
              -176.33
            ],
            [
              -45.7,
              144.98,
              -218.56
            ],
            [
              -55.33,
              139.75,
              -264.96
            ],
            [
              -67.8,
              134.54,
              -314.67
            ],
            [
              -85.08,
              128.54,
              -362.04
            ],
            [
              -102.46,
              124.09,
              -412.5
            ],
            [
              -121.4,
              122.3,
              -463.43
            ],
            [
              -142.56,
              121.82,
              -513.92
            ],
            [
              -165.9,
              126.81,
              -562.84
            ],
            [
              -191.36,
              131.34,
              -610.8
            ],
            [
              -217.76,
              140.57,
              -660.02
            ],
            [
              -246.11,
              157.8,
              -712.9
            ],
            [
              -274.06,
              175.65,
              -759.97
            ],
            [
              -300.16,
              195.0,
              -809.72
            ],
            [
              -328.71,
              214.67,
              -859.11
            ],
            [
              -358.28,
              237.63,
              -908.1
            ],
            [
              -386.3,
              261.82,
              -958.09
            ],
            [
              -412.77,
              288.87,
              -1006.47
            ],
            [
              -438.87,
              317.07,
              -1053.47
            ],
            [
              -463.12,
              346.14,
              -1101.23
            ],
            [
              -487.97,
              373.11,
              -1148.04
            ],
            [
              -508.19,
              405.36,
              -1191.31
            ],
            [
              -530.18,
              437.45,
              -1235.69
            ]
          ],
          "50": [
            [
              -1.96,
              36.71,
              6.1
            ],
            [
              -3.01,
              70.07,
              9.14
            ],
            [
              -5.92,
              104.06,
              10.66
            ],
            [
              -10.15,
              139.98,
              11.48
            ],
            [
              -12.74,
              174.97,
              9.7
            ],
            [
              -17.72,
              208.7,
              8.27
            ],
            [
              -21.04,
              239.86,
              7.33
            ],
            [
              -26.12,
              270.21,
              3.61
            ],
            [
              -29.95,
              296.51,
              -3.72
            ],
            [
              -33.94,
              321.69,
              -15.97
            ],
            [
              -38.13,
              346.47,
              -32.85
            ],
            [
              -42.86,
              367.01,
              -57.04
            ],
            [
              -48.5,
              387.0,
              -85.22
            ],
            [
              -57.02,
              398.1,
              -123.81
            ],
            [
              -63.59,
              408.81,
              -164.9
            ],
            [
              -73.3,
              419.45,
              -207.27
            ],
            [
              -85.22,
              428.99,
              -253.06
            ],
            [
              -97.28,
              438.82,
              -299.72
            ],
            [
              -111.85,
              450.08,
              -343.6
            ],
            [
              -130.47,
              465.74,
              -389.63
            ],
            [
              -148.23,
              481.32,
              -436.7
            ],
            [
              -163.49,
              496.64,
              -481.43
            ],
            [
              -184.52,
              514.45,
              -527.76
            ],
            [
              -204.32,
              529.97,
              -573.29
            ],
            [
              -225.65,
              546.2,
              -620.09
            ],
            [
              -247.38,
              565.46,
              -668.38
            ],
            [
              -267.91,
              584.07,
              -715.84
            ],
            [
              -287.79,
              607.18,
              -761.72
            ],
            [
              -307.68,
              631.61,
              -808.24
            ],
            [
              -326.79,
              653.81,
              -855.03
            ],
            [
              -346.41,
              678.17,
              -900.63
            ],
            [
              -360.29,
              701.03,
              -944.0
            ]
          ],
          "65": [
            [
              0.27,
              37.92,
              10.01
            ],
            [
              -1.09,
              73.49,
              13.87
            ],
            [
              -3.64,
              111.0,
              16.86
            ],
            [
              -4.98,
              147.02,
              20.19
            ],
            [
              -6.88,
              182.47,
              22.46
            ],
            [
              -10.94,
              218.32,
              25.51
            ],
            [
              -12.93,
              254.39,
              27.38
            ],
            [
              -15.13,
              291.33,
              30.8
            ],
            [
              -18.09,
              328.09,
              31.92
            ],
            [
              -20.27,
              363.53,
              32.88
            ],
            [
              -23.12,
              400.32,
              33.29
            ],
            [
              -25.7,
              436.03,
              33.46
            ],
            [
              -29.9,
              471.58,
              28.52
            ],
            [
              -34.61,
              508.51,
              15.83
            ],
            [
              -39.54,
              542.21,
              -3.24
            ],
            [
              -46.14,
              574.95,
              -32.55
            ],
            [
              -54.18,
              607.81,
              -66.55
            ],
            [
              -63.66,
              634.03,
              -104.43
            ],
            [
              -72.39,
              663.65,
              -146.55
            ],
            [
              -81.0,
              693.88,
              -191.96
            ],
            [
              -91.68,
              722.91,
              -237.47
            ],
            [
              -102.23,
              753.05,
              -284.48
            ],
            [
              -113.3,
              782.25,
              -332.69
            ],
            [
              -126.66,
              812.5,
              -380.57
            ],
            [
              -139.97,
              844.6,
              -430.05
            ],
            [
              -153.95,
              875.7,
              -478.43
            ],
            [
              -167.99,
              909.89,
              -526.45
            ],
            [
              -184.04,
              944.29,
              -573.58
            ],
            [
              -198.53,
              978.52,
              -621.22
            ],
            [
              -211.52,
              1014.04,
              -668.11
            ],
            [
              -222.88,
              1050.06,
              -713.66
            ],
            [
              -235.71,
              1083.88,
              -760.28
            ]
          ],
          "80": [
            [
              0.19,
              37.3,
              7.4
            ],
            [
              -0.59,
              76.02,
              15.39
            ],
            [
              -1.01,
              112.66,
              22.45
            ],
            [
              -1.89,
              150.16,
              27.89
            ],
            [
              -2.84,
              188.54,
              35.57
            ],
            [
              -4.24,
              226.27,
              41.58
            ],
            [
              -5.74,
              264.05,
              47.99
            ],
            [
              -8.17,
              302.08,
              55.2
            ],
            [
              -11.44,
              340.99,
              61.65
            ],
            [
              -13.87,
              380.03,
              68.72
            ],
            [
              -15.64,
              419.27,
              76.42
            ],
            [
              -17.28,
              459.23,
              80.98
            ],
            [
              -19.42,
              499.34,
              87.48
            ],
            [
              -19.76,
              538.76,
              94.05
            ],
            [
              -19.44,
              577.88,
              99.05
            ],
            [
              -19.67,
              617.33,
              104.15
            ],
            [
              -21.24,
              656.96,
              108.65
            ],
            [
              -21.36,
              696.51,
              112.13
            ],
            [
              -21.22,
              736.91,
              115.34
            ],
            [
              -22.46,
              777.76,
              114.67
            ],
            [
              -24.68,
              818.15,
              105.08
            ],
            [
              -28.57,
              859.85,
              90.33
            ],
            [
              -32.51,
              902.96,
              65.09
            ],
            [
              -38.55,
              946.07,
              38.59
            ],
            [
              -43.48,
              988.7,
              6.6
            ],
            [
              -50.77,
              1031.18,
              -31.06
            ],
            [
              -57.85,
              1074.42,
              -73.96
            ],
            [
              -66.13,
              1118.43,
              -117.22
            ],
            [
              -73.56,
              1162.57,
              -160.63
            ],
            [
              -81.7,
              1205.7,
              -205.39
            ],
            [
              -88.55,
              1251.07,
              -248.75
            ],
            [
              -95.96,
              1293.02,
              -295.21
            ]
          ],
          "100": [
            [
              -0.65,
              37.85,
              9.33
            ],
            [
              -0.62,
              73.96,
              16.96
            ],
            [
              -0.21,
              109.98,
              22.34
            ],
            [
              -0.41,
              145.83,
              28.49
            ],
            [
              -0.3,
              183.37,
              34.07
            ],
            [
              -0.76,
              221.11,
              39.43
            ],
            [
              -0.77,
              258.78,
              44.85
            ],
            [
              -1.34,
              297.19,
              51.19
            ],
            [
              -2.43,
              335.37,
              57.36
            ],
            [
              -2.13,
              373.42,
              63.37
            ],
            [
              -2.25,
              412.11,
              69.94
            ],
            [
              -1.77,
              450.47,
              75.69
            ],
            [
              -2.03,
              488.32,
              83.1
            ],
            [
              -1.93,
              525.68,
              89.28
            ],
            [
              -1.9,
              563.58,
              96.59
            ],
            [
              -1.95,
              601.51,
              104.45
            ],
            [
              -1.63,
              637.95,
              112.1
            ],
            [
              -2.16,
              675.25,
              121.41
            ],
            [
              -2.42,
              713.08,
              129.92
            ],
            [
              -1.77,
              750.36,
              135.75
            ],
            [
              -1.06,
              789.56,
              140.33
            ],
            [
              -1.09,
              828.37,
              145.01
            ],
            [
              -2.55,
              867.35,
              146.2
            ],
            [
              -1.87,
              904.01,
              143.95
            ],
            [
              -2.17,
              940.77,
              140.72
            ],
            [
              -3.58,
              979.07,
              133.82
            ],
            [
              -7.37,
              1015.18,
              119.65
            ],
            [
              -10.26,
              1046.87,
              102.97
            ],
            [
              -11.47,
              1076.26,
              90.81
            ],
            [
              -12.6,
              1100.5,
              78.99
            ],
            [
              -13.69,
              1120.05,
              69.18
            ],
            [
              -13.02,
              1131.76,
              66.03
            ]
          ]
        }
      },
      "Bin256": {
        "mean_full_tokens": 224.0,
        "curve": [
          {
            "budget_pct": 15,
            "mean_tokens": 34.0,
            "mae_first16_mm": 120.79,
            "mae_full32_mm": 278.21,
            "valid_rate": 1.0
          },
          {
            "budget_pct": 25,
            "mean_tokens": 56.0,
            "mae_first16_mm": 57.09,
            "mae_full32_mm": 222.38,
            "valid_rate": 1.0
          },
          {
            "budget_pct": 35,
            "mean_tokens": 78.0,
            "mae_first16_mm": 24.86,
            "mae_full32_mm": 174.87,
            "valid_rate": 1.0
          },
          {
            "budget_pct": 50,
            "mean_tokens": 112.0,
            "mae_first16_mm": 0.82,
            "mae_full32_mm": 105.78,
            "valid_rate": 1.0
          },
          {
            "budget_pct": 65,
            "mean_tokens": 146.0,
            "mae_first16_mm": 0.82,
            "mae_full32_mm": 63.76,
            "valid_rate": 1.0
          },
          {
            "budget_pct": 80,
            "mean_tokens": 179.0,
            "mae_first16_mm": 0.82,
            "mae_full32_mm": 24.08,
            "valid_rate": 1.0
          },
          {
            "budget_pct": 100,
            "mean_tokens": 224.0,
            "mae_first16_mm": 0.82,
            "mae_full32_mm": 1.33,
            "valid_rate": 1.0
          }
        ],
        "hero_morph_xyz_mm": {
          "15": [
            [
              3.12,
              35.48,
              9.01
            ],
            [
              5.15,
              71.32,
              16.91
            ],
            [
              4.96,
              107.9,
              22.98
            ],
            [
              4.78,
              144.49,
              27.94
            ],
            [
              4.78,
              144.49,
              27.94
            ],
            [
              4.78,
              144.49,
              27.94
            ],
            [
              4.78,
              144.49,
              27.94
            ],
            [
              4.78,
              144.49,
              27.94
            ],
            [
              4.78,
              144.49,
              27.94
            ],
            [
              4.78,
              144.49,
              27.94
            ],
            [
              4.78,
              144.49,
              27.94
            ],
            [
              4.78,
              144.49,
              27.94
            ],
            [
              4.78,
              144.49,
              27.94
            ],
            [
              4.78,
              144.49,
              27.94
            ],
            [
              4.78,
              144.49,
              27.94
            ],
            [
              4.78,
              144.49,
              27.94
            ],
            [
              4.78,
              144.49,
              27.94
            ],
            [
              4.78,
              144.49,
              27.94
            ],
            [
              4.78,
              144.49,
              27.94
            ],
            [
              4.78,
              144.49,
              27.94
            ],
            [
              4.78,
              144.49,
              27.94
            ],
            [
              4.78,
              144.49,
              27.94
            ],
            [
              4.78,
              144.49,
              27.94
            ],
            [
              4.78,
              144.49,
              27.94
            ],
            [
              4.78,
              144.49,
              27.94
            ],
            [
              4.78,
              144.49,
              27.94
            ],
            [
              4.78,
              144.49,
              27.94
            ],
            [
              4.78,
              144.49,
              27.94
            ],
            [
              4.78,
              144.49,
              27.94
            ],
            [
              4.78,
              144.49,
              27.94
            ],
            [
              4.78,
              144.49,
              27.94
            ],
            [
              4.78,
              144.49,
              27.94
            ]
          ],
          "25": [
            [
              3.12,
              35.48,
              9.01
            ],
            [
              5.15,
              71.32,
              16.91
            ],
            [
              4.96,
              107.9,
              22.98
            ],
            [
              4.78,
              144.49,
              27.94
            ],
            [
              4.6,
              181.07,
              32.17
            ],
            [
              4.41,
              218.01,
              36.76
            ],
            [
              4.23,
              254.96,
              43.57
            ],
            [
              4.04,
              291.54,
              51.47
            ],
            [
              4.04,
              291.54,
              51.47
            ],
            [
              4.04,
              291.54,
              51.47
            ],
            [
              4.04,
              291.54,
              51.47
            ],
            [
              4.04,
              291.54,
              51.47
            ],
            [
              4.04,
              291.54,
              51.47
            ],
            [
              4.04,
              291.54,
              51.47
            ],
            [
              4.04,
              291.54,
              51.47
            ],
            [
              4.04,
              291.54,
              51.47
            ],
            [
              4.04,
              291.54,
              51.47
            ],
            [
              4.04,
              291.54,
              51.47
            ],
            [
              4.04,
              291.54,
              51.47
            ],
            [
              4.04,
              291.54,
              51.47
            ],
            [
              4.04,
              291.54,
              51.47
            ],
            [
              4.04,
              291.54,
              51.47
            ],
            [
              4.04,
              291.54,
              51.47
            ],
            [
              4.04,
              291.54,
              51.47
            ],
            [
              4.04,
              291.54,
              51.47
            ],
            [
              4.04,
              291.54,
              51.47
            ],
            [
              4.04,
              291.54,
              51.47
            ],
            [
              4.04,
              291.54,
              51.47
            ],
            [
              4.04,
              291.54,
              51.47
            ],
            [
              4.04,
              291.54,
              51.47
            ],
            [
              4.04,
              291.54,
              51.47
            ],
            [
              4.04,
              291.54,
              51.47
            ]
          ],
          "35": [
            [
              3.12,
              35.48,
              9.01
            ],
            [
              5.15,
              71.32,
              16.91
            ],
            [
              4.96,
              107.9,
              22.98
            ],
            [
              4.78,
              144.49,
              27.94
            ],
            [
              4.6,
              181.07,
              32.17
            ],
            [
              4.41,
              218.01,
              36.76
            ],
            [
              4.23,
              254.96,
              43.57
            ],
            [
              4.04,
              291.54,
              51.47
            ],
            [
              3.86,
              328.13,
              59.37
            ],
            [
              3.68,
              364.34,
              65.81
            ],
            [
              3.49,
              400.18,
              70.4
            ],
            [
              3.49,
              400.18,
              70.4
            ],
            [
              3.49,
              400.18,
              70.4
            ],
            [
              3.49,
              400.18,
              70.4
            ],
            [
              3.49,
              400.18,
              70.4
            ],
            [
              3.49,
              400.18,
              70.4
            ],
            [
              3.49,
              400.18,
              70.4
            ],
            [
              3.49,
              400.18,
              70.4
            ],
            [
              3.49,
              400.18,
              70.4
            ],
            [
              3.49,
              400.18,
              70.4
            ],
            [
              3.49,
              400.18,
              70.4
            ],
            [
              3.49,
              400.18,
              70.4
            ],
            [
              3.49,
              400.18,
              70.4
            ],
            [
              3.49,
              400.18,
              70.4
            ],
            [
              3.49,
              400.18,
              70.4
            ],
            [
              3.49,
              400.18,
              70.4
            ],
            [
              3.49,
              400.18,
              70.4
            ],
            [
              3.49,
              400.18,
              70.4
            ],
            [
              3.49,
              400.18,
              70.4
            ],
            [
              3.49,
              400.18,
              70.4
            ],
            [
              3.49,
              400.18,
              70.4
            ],
            [
              3.49,
              400.18,
              70.4
            ]
          ],
          "50": [
            [
              3.12,
              35.48,
              9.01
            ],
            [
              5.15,
              71.32,
              16.91
            ],
            [
              4.96,
              107.9,
              22.98
            ],
            [
              4.78,
              144.49,
              27.94
            ],
            [
              4.6,
              181.07,
              32.17
            ],
            [
              4.41,
              218.01,
              36.76
            ],
            [
              4.23,
              254.96,
              43.57
            ],
            [
              4.04,
              291.54,
              51.47
            ],
            [
              3.86,
              328.13,
              59.37
            ],
            [
              3.68,
              364.34,
              65.81
            ],
            [
              3.49,
              400.18,
              70.4
            ],
            [
              3.31,
              436.03,
              74.26
            ],
            [
              3.13,
              472.98,
              78.12
            ],
            [
              2.94,
              509.93,
              83.09
            ],
            [
              2.76,
              546.88,
              90.99
            ],
            [
              2.57,
              583.82,
              100.74
            ],
            [
              2.57,
              583.82,
              100.74
            ],
            [
              2.57,
              583.82,
              100.74
            ],
            [
              2.57,
              583.82,
              100.74
            ],
            [
              2.57,
              583.82,
              100.74
            ],
            [
              2.57,
              583.82,
              100.74
            ],
            [
              2.57,
              583.82,
              100.74
            ],
            [
              2.57,
              583.82,
              100.74
            ],
            [
              2.57,
              583.82,
              100.74
            ],
            [
              2.57,
              583.82,
              100.74
            ],
            [
              2.57,
              583.82,
              100.74
            ],
            [
              2.57,
              583.82,
              100.74
            ],
            [
              2.57,
              583.82,
              100.74
            ],
            [
              2.57,
              583.82,
              100.74
            ],
            [
              2.57,
              583.82,
              100.74
            ],
            [
              2.57,
              583.82,
              100.74
            ],
            [
              2.57,
              583.82,
              100.74
            ]
          ],
          "65": [
            [
              3.12,
              35.48,
              9.01
            ],
            [
              5.15,
              71.32,
              16.91
            ],
            [
              4.96,
              107.9,
              22.98
            ],
            [
              4.78,
              144.49,
              27.94
            ],
            [
              4.6,
              181.07,
              32.17
            ],
            [
              4.41,
              218.01,
              36.76
            ],
            [
              4.23,
              254.96,
              43.57
            ],
            [
              4.04,
              291.54,
              51.47
            ],
            [
              3.86,
              328.13,
              59.37
            ],
            [
              3.68,
              364.34,
              65.81
            ],
            [
              3.49,
              400.18,
              70.4
            ],
            [
              3.31,
              436.03,
              74.26
            ],
            [
              3.13,
              472.98,
              78.12
            ],
            [
              2.94,
              509.93,
              83.09
            ],
            [
              2.76,
              546.88,
              90.99
            ],
            [
              2.57,
              583.82,
              100.74
            ],
            [
              2.39,
              620.77,
              111.21
            ],
            [
              2.94,
              657.72,
              121.32
            ],
            [
              3.49,
              694.67,
              131.43
            ],
            [
              4.04,
              731.62,
              140.81
            ],
            [
              4.04,
              731.62,
              140.81
            ],
            [
              4.04,
              731.62,
              140.81
            ],
            [
              4.04,
              731.62,
              140.81
            ],
            [
              4.04,
              731.62,
              140.81
            ],
            [
              4.04,
              731.62,
              140.81
            ],
            [
              4.04,
              731.62,
              140.81
            ],
            [
              4.04,
              731.62,
              140.81
            ],
            [
              4.04,
              731.62,
              140.81
            ],
            [
              4.04,
              731.62,
              140.81
            ],
            [
              4.04,
              731.62,
              140.81
            ],
            [
              4.04,
              731.62,
              140.81
            ],
            [
              4.04,
              731.62,
              140.81
            ]
          ],
          "80": [
            [
              3.12,
              35.48,
              9.01
            ],
            [
              5.15,
              71.32,
              16.91
            ],
            [
              4.96,
              107.9,
              22.98
            ],
            [
              4.78,
              144.49,
              27.94
            ],
            [
              4.6,
              181.07,
              32.17
            ],
            [
              4.41,
              218.01,
              36.76
            ],
            [
              4.23,
              254.96,
              43.57
            ],
            [
              4.04,
              291.54,
              51.47
            ],
            [
              3.86,
              328.13,
              59.37
            ],
            [
              3.68,
              364.34,
              65.81
            ],
            [
              3.49,
              400.18,
              70.4
            ],
            [
              3.31,
              436.03,
              74.26
            ],
            [
              3.13,
              472.98,
              78.12
            ],
            [
              2.94,
              509.93,
              83.09
            ],
            [
              2.76,
              546.88,
              90.99
            ],
            [
              2.57,
              583.82,
              100.74
            ],
            [
              2.39,
              620.77,
              111.21
            ],
            [
              2.94,
              657.72,
              121.32
            ],
            [
              3.49,
              694.67,
              131.43
            ],
            [
              4.04,
              731.62,
              140.81
            ],
            [
              4.6,
              768.2,
              149.45
            ],
            [
              4.41,
              804.78,
              156.62
            ],
            [
              4.23,
              841.36,
              159.74
            ],
            [
              4.04,
              878.31,
              159.56
            ],
            [
              3.86,
              915.99,
              153.86
            ],
            [
              3.86,
              915.99,
              153.86
            ],
            [
              3.86,
              915.99,
              153.86
            ],
            [
              3.86,
              915.99,
              153.86
            ],
            [
              3.86,
              915.99,
              153.86
            ],
            [
              3.86,
              915.99,
              153.86
            ],
            [
              3.86,
              915.99,
              153.86
            ],
            [
              3.86,
              915.99,
              153.86
            ]
          ],
          "100": [
            [
              3.12,
              35.48,
              9.01
            ],
            [
              5.15,
              71.32,
              16.91
            ],
            [
              4.96,
              107.9,
              22.98
            ],
            [
              4.78,
              144.49,
              27.94
            ],
            [
              4.6,
              181.07,
              32.17
            ],
            [
              4.41,
              218.01,
              36.76
            ],
            [
              4.23,
              254.96,
              43.57
            ],
            [
              4.04,
              291.54,
              51.47
            ],
            [
              3.86,
              328.13,
              59.37
            ],
            [
              3.68,
              364.34,
              65.81
            ],
            [
              3.49,
              400.18,
              70.4
            ],
            [
              3.31,
              436.03,
              74.26
            ],
            [
              3.13,
              472.98,
              78.12
            ],
            [
              2.94,
              509.93,
              83.09
            ],
            [
              2.76,
              546.88,
              90.99
            ],
            [
              2.57,
              583.82,
              100.74
            ],
            [
              2.39,
              620.77,
              111.21
            ],
            [
              2.94,
              657.72,
              121.32
            ],
            [
              3.49,
              694.67,
              131.43
            ],
            [
              4.04,
              731.62,
              140.81
            ],
            [
              4.6,
              768.2,
              149.45
            ],
            [
              4.41,
              804.78,
              156.62
            ],
            [
              4.23,
              841.36,
              159.74
            ],
            [
              4.04,
              878.31,
              159.56
            ],
            [
              3.86,
              915.99,
              153.86
            ],
            [
              3.31,
              952.94,
              143.75
            ],
            [
              1.29,
              987.32,
              128.86
            ],
            [
              -1.84,
              1015.07,
              108.46
            ],
            [
              -4.23,
              1034.74,
              88.42
            ],
            [
              -5.51,
              1048.16,
              71.32
            ],
            [
              -5.7,
              1058.64,
              57.17
            ],
            [
              -5.88,
              1066.54,
              50.0
            ]
          ]
        }
      }
    },
    "elapsed_sec": 29.6
  },
  "exp6_cover": {
    "arm": "cover_eef",
    "suite": "libero_spatial",
    "rows": [
      {
        "arm": "Cover (EEF)",
        "axis": "Causal-Time Early Stop",
        "setting": "H=32 (100%)",
        "budget_param": 32,
        "n_exec": 16,
        "mean_tokens_per_chunk": 50.3,
        "median_chunk_ms": 143.2,
        "success_rate": 0.84,
        "n_episodes": 50
      },
      {
        "arm": "Cover (EEF)",
        "axis": "Causal-Time Early Stop",
        "setting": "H=16 (50% causal stop)",
        "budget_param": 16,
        "n_exec": 16,
        "mean_tokens_per_chunk": 25.2,
        "median_chunk_ms": 77.2,
        "success_rate": 0.76,
        "n_episodes": 50
      }
    ],
    "elapsed_sec": 2970.7
  },
  "exp6_oat": {
    "arm": "oat_joint",
    "suite": "libero_spatial",
    "rows": [
      {
        "arm": "OAT (Joint)",
        "axis": "Progressive Coarse-to-Fine",
        "setting": "keep_k=16/16",
        "budget_param": 16,
        "n_exec": 16,
        "mean_tokens_per_chunk": 16.0,
        "median_chunk_ms": 30.6,
        "success_rate": 0.8,
        "n_episodes": 50
      },
      {
        "arm": "OAT (Joint)",
        "axis": "Progressive Coarse-to-Fine",
        "setting": "keep_k=12/16",
        "budget_param": 12,
        "n_exec": 16,
        "mean_tokens_per_chunk": 12.0,
        "median_chunk_ms": 25.0,
        "success_rate": 0.58,
        "n_episodes": 50
      },
      {
        "arm": "OAT (Joint)",
        "axis": "Progressive Coarse-to-Fine",
        "setting": "keep_k=8/16",
        "budget_param": 8,
        "n_exec": 16,
        "mean_tokens_per_chunk": 8.0,
        "median_chunk_ms": 19.0,
        "success_rate": 0.8,
        "n_episodes": 50
      }
    ],
    "elapsed_sec": 3186.4
  },
  "exp6_fast": null,
  "exp7_frontier": {
    "rows": [
      {
        "label": "Pose only (no force)",
        "q_mm": null,
        "deadband_mm": null,
        "active_frame_pct": 0.0,
        "events_per_frame": 0.0,
        "extra_tokens_per_32win": 0.0,
        "overhead_pct_vs_cover44": 0.0,
        "mean_3arm_sr": 0.1667,
        "franka_sr": 0.2,
        "ur5e_sr": 0.1,
        "iiwa_sr": 0.2
      },
      {
        "label": "Cont. dense (db=0)",
        "q_mm": null,
        "deadband_mm": 0.0,
        "active_frame_pct": 100.0,
        "events_per_frame": 0.0,
        "extra_tokens_per_32win": 0.0,
        "overhead_pct_vs_cover44": 0.0,
        "mean_3arm_sr": 0.8,
        "franka_sr": 0.85,
        "ur5e_sr": 0.7,
        "iiwa_sr": 0.85
      },
      {
        "label": "2mm / db=4mm",
        "q_mm": 2.0,
        "deadband_mm": 4.0,
        "active_frame_pct": 70.8,
        "events_per_frame": 0.7589,
        "extra_tokens_per_32win": 24.29,
        "overhead_pct_vs_cover44": 55.1,
        "mean_3arm_sr": 0.8,
        "franka_sr": 0.85,
        "ur5e_sr": 0.65,
        "iiwa_sr": 0.9
      },
      {
        "label": "5mm / db=4mm",
        "q_mm": 5.0,
        "deadband_mm": 4.0,
        "active_frame_pct": 52.2,
        "events_per_frame": 0.3995,
        "extra_tokens_per_32win": 12.78,
        "overhead_pct_vs_cover44": 29.0,
        "mean_3arm_sr": 0.8167,
        "franka_sr": 0.9,
        "ur5e_sr": 0.7,
        "iiwa_sr": 0.85
      },
      {
        "label": "5mm / db=8mm (C1F)",
        "q_mm": 5.0,
        "deadband_mm": 8.0,
        "active_frame_pct": 42.2,
        "events_per_frame": 0.3656,
        "extra_tokens_per_32win": 11.7,
        "overhead_pct_vs_cover44": 26.5,
        "mean_3arm_sr": 0.8167,
        "franka_sr": 0.85,
        "ur5e_sr": 0.7,
        "iiwa_sr": 0.9
      },
      {
        "label": "5mm / db=12mm",
        "q_mm": 5.0,
        "deadband_mm": 12.0,
        "active_frame_pct": 30.8,
        "events_per_frame": 0.2888,
        "extra_tokens_per_32win": 9.24,
        "overhead_pct_vs_cover44": 21.0,
        "mean_3arm_sr": 0.8167,
        "franka_sr": 0.9,
        "ur5e_sr": 0.7,
        "iiwa_sr": 0.85
      },
      {
        "label": "5mm / db=16mm",
        "q_mm": 5.0,
        "deadband_mm": 16.0,
        "active_frame_pct": 25.9,
        "events_per_frame": 0.2285,
        "extra_tokens_per_32win": 7.31,
        "overhead_pct_vs_cover44": 16.6,
        "mean_3arm_sr": 0.8,
        "franka_sr": 0.9,
        "ur5e_sr": 0.65,
        "iiwa_sr": 0.85
      },
      {
        "label": "5mm / db=24mm",
        "q_mm": 5.0,
        "deadband_mm": 24.0,
        "active_frame_pct": 21.6,
        "events_per_frame": 0.2,
        "extra_tokens_per_32win": 6.4,
        "overhead_pct_vs_cover44": 14.5,
        "mean_3arm_sr": 0.5833,
        "franka_sr": 0.7,
        "ur5e_sr": 0.4,
        "iiwa_sr": 0.65
      },
      {
        "label": "10mm / db=8mm",
        "q_mm": 10.0,
        "deadband_mm": 8.0,
        "active_frame_pct": 29.6,
        "events_per_frame": 0.1715,
        "extra_tokens_per_32win": 5.49,
        "overhead_pct_vs_cover44": 12.4,
        "mean_3arm_sr": 0.8,
        "franka_sr": 0.9,
        "ur5e_sr": 0.65,
        "iiwa_sr": 0.85
      },
      {
        "label": "10mm / db=12mm",
        "q_mm": 10.0,
        "deadband_mm": 12.0,
        "active_frame_pct": 29.2,
        "events_per_frame": 0.1698,
        "extra_tokens_per_32win": 5.43,
        "overhead_pct_vs_cover44": 12.3,
        "mean_3arm_sr": 0.8,
        "franka_sr": 0.9,
        "ur5e_sr": 0.65,
        "iiwa_sr": 0.85
      },
      {
        "label": "15mm / db=12mm",
        "q_mm": 15.0,
        "deadband_mm": 12.0,
        "active_frame_pct": 24.8,
        "events_per_frame": 0.1132,
        "extra_tokens_per_32win": 3.62,
        "overhead_pct_vs_cover44": 8.2,
        "mean_3arm_sr": 0.7833,
        "franka_sr": 0.9,
        "ur5e_sr": 0.65,
        "iiwa_sr": 0.8
      },
      {
        "label": "20mm / db=12mm",
        "q_mm": 20.0,
        "deadband_mm": 12.0,
        "active_frame_pct": 21.7,
        "events_per_frame": 0.0789,
        "extra_tokens_per_32win": 2.53,
        "overhead_pct_vs_cover44": 5.7,
        "mean_3arm_sr": 0.65,
        "franka_sr": 0.75,
        "ur5e_sr": 0.5,
        "iiwa_sr": 0.7
      },
      {
        "label": "30mm / db=16mm",
        "q_mm": 30.0,
        "deadband_mm": 16.0,
        "active_frame_pct": 14.8,
        "events_per_frame": 0.044,
        "extra_tokens_per_32win": 1.41,
        "overhead_pct_vs_cover44": 3.2,
        "mean_3arm_sr": 0.3167,
        "franka_sr": 0.45,
        "ur5e_sr": 0.1,
        "iiwa_sr": 0.4
      }
    ],
    "elapsed_sec": 1627.9
  },
  "exp8_open": {
    "mode": "open",
    "rows": [
      {
        "mode": "open",
        "n_action_steps": 16,
        "drift": 0.0,
        "success_rate": 0.76,
        "n_episodes": 50
      },
      {
        "mode": "open",
        "n_action_steps": 16,
        "drift": 0.07,
        "success_rate": 0.66,
        "n_episodes": 50
      },
      {
        "mode": "open",
        "n_action_steps": 32,
        "drift": 0.0,
        "success_rate": 0.68,
        "n_episodes": 50
      },
      {
        "mode": "open",
        "n_action_steps": 32,
        "drift": 0.07,
        "success_rate": 0.32,
        "n_episodes": 50
      }
    ]
  },
  "exp8_blind": {
    "mode": "blind_fb",
    "rows": [
      {
        "mode": "blind_fb",
        "n_action_steps": 8,
        "drift": 0.07,
        "success_rate": 0.64,
        "n_episodes": 50
      },
      {
        "mode": "blind_fb",
        "n_action_steps": 16,
        "drift": 0.0,
        "success_rate": 0.76,
        "n_episodes": 50
      },
      {
        "mode": "blind_fb",
        "n_action_steps": 16,
        "drift": 0.07,
        "success_rate": 0.6,
        "n_episodes": 50
      },
      {
        "mode": "blind_fb",
        "n_action_steps": 32,
        "drift": 0.0,
        "success_rate": 0.68,
        "n_episodes": 50
      },
      {
        "mode": "blind_fb",
        "n_action_steps": 32,
        "drift": 0.07,
        "success_rate": 0.52,
        "n_episodes": 50
      }
    ]
  },
  "exp8_gated": {
    "mode": "gated_fb",
    "rows": [
      {
        "mode": "gated_fb",
        "n_action_steps": 32,
        "drift": 0.04,
        "success_rate": 0.4667,
        "n_episodes": 30,
        "replans_per_ep": 9.0,
        "contact_frozen_frac": 0.7297
      },
      {
        "mode": "gated_fb",
        "n_action_steps": 32,
        "drift": 0.07,
        "success_rate": 0.5667,
        "n_episodes": 30,
        "replans_per_ep": 9.0,
        "contact_frozen_frac": 0.7474
      },
      {
        "mode": "gated_fb",
        "n_action_steps": 32,
        "drift": 0.1,
        "success_rate": 0.5,
        "n_episodes": 30,
        "replans_per_ep": 9.0,
        "contact_frozen_frac": 0.7401
      }
    ]
  },
  "exp9_manifold": {
    "arms": [
      "Franka",
      "UR5e",
      "KUKA IIWA",
      "Kinova3",
      "Sawyer"
    ],
    "directions": [
      "+X Forward",
      "-X Pull/Back",
      "+Y Left",
      "-Y Right",
      "+Z Lift",
      "-Z Lower"
    ],
    "n_points": 900,
    "metrics": {
      "joint_cover": {
        "knn10_robot_purity": 0.6604,
        "knn10_motion_cos_all": 0.5445,
        "knn10_motion_cos_cross_arm": 0.2425
      },
      "task_c1": {
        "knn10_robot_purity": 0.2243,
        "knn10_motion_cos_all": 0.7174,
        "knn10_motion_cos_cross_arm": 0.693
      }
    },
    "point_fields": [
      "arm_idx",
      "dir_idx",
      "jx",
      "jy",
      "cx",
      "cy",
      "dx_mm",
      "dy_mm",
      "dz_mm"
    ],
    "points": [
      [
        0,
        5,
        0.077,
        0.635,
        0.788,
        0.866,
        170.8,
        -53.2,
        -214.1
      ],
      [
        0,
        0,
        -0.016,
        0.56,
        0.755,
        0.829,
        184.1,
        -60.9,
        97.2
      ],
      [
        0,
        2,
        -0.82,
        -0.21,
        0.858,
        0.064,
        51.6,
        162.2,
        161.2
      ],
      [
        0,
        4,
        0.091,
        -0.787,
        0.504,
        0.19,
        42.4,
        -34.3,
        60.7
      ],
      [
        0,
        0,
        0.083,
        0.608,
        0.792,
        0.885,
        240.3,
        -142.5,
        -185.8
      ],
      [
        0,
        3,
        0.392,
        -0.231,
        0.735,
        0.38,
        1.1,
        -133.7,
        11.2
      ],
      [
        0,
        2,
        -1.04,
        -0.444,
        0.975,
        -0.696,
        -75.8,
        207.0,
        76.0
      ],
      [
        0,
        2,
        -1.023,
        -0.492,
        0.999,
        -0.677,
        -111.8,
        207.5,
        51.3
      ],
      [
        0,
        2,
        -0.265,
        -0.845,
        0.468,
        0.123,
        6.9,
        47.7,
        -9.0
      ],
      [
        0,
        1,
        -0.609,
        -0.32,
        -1.0,
        -0.165,
        -305.5,
        13.7,
        -137.5
      ],
      [
        0,
        2,
        -0.686,
        -0.449,
        0.967,
        -0.763,
        14.9,
        170.9,
        8.6
      ],
      [
        0,
        4,
        -0.651,
        -0.098,
        0.846,
        0.151,
        35.1,
        164.9,
        183.3
      ],
      [
        0,
        2,
        0.418,
        -0.145,
        0.809,
        -0.19,
        4.9,
        130.1,
        117.2
      ],
      [
        0,
        5,
        -0.162,
        -0.035,
        0.663,
        0.297,
        -54.5,
        36.2,
        -273.4
      ],
      [
        0,
        1,
        -0.271,
        -0.866,
        0.87,
        -0.626,
        -99.1,
        50.0,
        72.3
      ],
      [
        0,
        4,
        0.379,
        -0.453,
        0.674,
        0.243,
        -26.1,
        -29.5,
        49.3
      ],
      [
        0,
        4,
        0.437,
        -0.392,
        0.713,
        0.319,
        -11.0,
        -109.7,
        202.1
      ],
      [
        0,
        2,
        -0.273,
        -0.31,
        0.859,
        -0.245,
        -42.3,
        91.3,
        66.4
      ],
      [
        0,
        2,
        -1.015,
        -0.462,
        1.031,
        -0.721,
        -139.3,
        183.9,
        28.0
      ],
      [
        0,
        2,
        -0.272,
        -0.207,
        0.749,
        0.085,
        -62.0,
        229.5,
        -131.2
      ],
      [
        0,
        1,
        -0.752,
        -0.663,
        0.959,
        -1.038,
        -227.3,
        63.5,
        50.9
      ],
      [
        0,
        5,
        -0.221,
        -0.07,
        0.558,
        0.187,
        -102.7,
        141.1,
        -184.8
      ],
      [
        0,
        1,
        -0.531,
        -0.433,
        0.548,
        -0.01,
        -73.4,
        -34.6,
        21.6
      ],
      [
        0,
        1,
        -0.388,
        -0.932,
        -0.803,
        -0.087,
        -159.5,
        -89.2,
        54.5
      ],
      [
        0,
        2,
        -1.023,
        -0.411,
        1.005,
        -0.719,
        -58.7,
        217.0,
        17.9
      ],
      [
        0,
        0,
        0.049,
        0.569,
        0.827,
        1.04,
        246.5,
        -33.1,
        -185.6
      ],
      [
        0,
        5,
        -0.287,
        -0.726,
        -0.786,
        -0.076,
        -119.1,
        -1.9,
        -190.7
      ],
      [
        0,
        5,
        0.131,
        0.439,
        0.64,
        0.592,
        110.8,
        -63.5,
        -153.1
      ],
      [
        0,
        4,
        -0.045,
        -0.72,
        0.115,
        0.087,
        -67.6,
        -20.2,
        76.9
      ],
      [
        0,
        0,
        0.127,
        0.18,
        0.707,
        0.267,
        47.6,
        20.8,
        33.8
      ],
      [
        0,
        4,
        0.048,
        -0.223,
        0.729,
        0.255,
        -7.8,
        -0.0,
        123.6
      ],
      [
        0,
        0,
        0.101,
        0.18,
        0.604,
        0.267,
        67.7,
        31.8,
        -22.4
      ],
      [
        0,
        2,
        -0.845,
        -0.243,
        0.827,
        0.116,
        46.5,
        170.7,
        146.0
      ],
      [
        0,
        4,
        0.28,
        -0.187,
        0.736,
        0.255,
        -0.4,
        -12.8,
        37.0
      ],
      [
        0,
        2,
        0.147,
        0.232,
        0.799,
        0.137,
        88.8,
        153.6,
        56.9
      ],
      [
        0,
        5,
        0.071,
        0.6,
        0.796,
        0.92,
        198.5,
        -51.1,
        -226.0
      ],
      [
        0,
        4,
        0.085,
        -0.458,
        0.725,
        0.26,
        -22.7,
        -14.4,
        170.4
      ],
      [
        0,
        2,
        -0.957,
        -0.482,
        0.997,
        -0.685,
        -120.8,
        212.1,
        55.7
      ],
      [
        0,
        2,
        -0.245,
        -0.522,
        0.809,
        -0.072,
        -33.1,
        225.6,
        -87.0
      ],
      [
        0,
        4,
        0.068,
        -0.034,
        0.657,
        0.329,
        -12.7,
        -51.8,
        54.3
      ],
      [
        0,
        2,
        0.208,
        0.107,
        0.71,
        0.236,
        -18.8,
        54.0,
        -6.1
      ],
      [
        0,
        4,
        0.415,
        -0.385,
        0.688,
        0.249,
        -23.8,
        -61.9,
        99.1
      ],
      [
        0,
        1,
        -0.404,
        -0.475,
        -1.04,
        -0.167,
        -268.0,
        -84.8,
        -144.6
      ],
      [
        0,
        4,
        -0.733,
        -0.189,
        0.837,
        0.096,
        24.5,
        158.0,
        219.4
      ],
      [
        0,
        4,
        -0.603,
        -0.089,
        0.845,
        0.157,
        62.3,
        156.3,
        169.5
      ],
      [
        0,
        2,
        0.18,
        0.437,
        0.703,
        0.032,
        -1.4,
        99.4,
        -56.8
      ],
      [
        0,
        0,
        -0.021,
        0.249,
        0.686,
        0.274,
        25.3,
        16.4,
        22.2
      ],
      [
        0,
        0,
        0.08,
        0.65,
        0.812,
        0.985,
        298.7,
        -7.8,
        -178.2
      ],
      [
        0,
        4,
        0.334,
        -0.146,
        0.764,
        0.335,
        -4.8,
        -37.6,
        70.8
      ],
      [
        0,
        4,
        0.332,
        -0.14,
        0.776,
        -0.217,
        -16.2,
        14.2,
        106.4
      ],
      [
        0,
        4,
        0.266,
        -0.062,
        0.729,
        0.206,
        3.7,
        41.2,
        63.5
      ],
      [
        0,
        4,
        0.276,
        -0.39,
        0.799,
        -0.047,
        -24.4,
        -37.1,
        75.1
      ],
      [
        0,
        4,
        0.046,
        -0.163,
        0.701,
        0.287,
        17.8,
        -16.1,
        46.5
      ],
      [
        0,
        4,
        -0.59,
        -0.138,
        0.853,
        0.149,
        14.3,
        144.9,
        212.2
      ],
      [
        0,
        4,
        0.285,
        -0.086,
        0.718,
        0.068,
        -25.4,
        25.0,
        206.2
      ],
      [
        0,
        2,
        0.385,
        -0.148,
        0.676,
        0.107,
        24.9,
        46.5,
        -2.3
      ],
      [
        0,
        0,
        -0.062,
        0.339,
        0.748,
        0.497,
        188.0,
        14.7,
        138.2
      ],
      [
        0,
        4,
        -0.036,
        0.0,
        0.723,
        0.052,
        16.4,
        14.3,
        52.5
      ],
      [
        0,
        0,
        0.045,
        0.559,
        0.794,
        0.838,
        276.2,
        135.9,
        -149.1
      ],
      [
        0,
        4,
        -0.332,
        -0.385,
        0.663,
        0.223,
        -20.6,
        -42.8,
        100.7
      ],
      [
        0,
        0,
        -0.056,
        0.546,
        0.777,
        0.601,
        286.6,
        50.7,
        79.3
      ],
      [
        0,
        4,
        0.084,
        0.146,
        0.712,
        0.354,
        62.5,
        -43.9,
        156.2
      ],
      [
        0,
        0,
        0.048,
        0.64,
        0.808,
        0.66,
        192.2,
        33.1,
        131.2
      ],
      [
        0,
        0,
        0.002,
        0.592,
        0.803,
        0.641,
        269.5,
        74.4,
        56.6
      ],
      [
        0,
        0,
        0.065,
        0.585,
        0.803,
        0.859,
        269.4,
        47.7,
        -139.0
      ],
      [
        0,
        0,
        0.006,
        0.435,
        0.81,
        0.81,
        279.1,
        164.7,
        -137.7
      ],
      [
        0,
        4,
        0.031,
        -0.118,
        0.684,
        0.304,
        21.0,
        -49.1,
        148.5
      ],
      [
        0,
        0,
        -0.758,
        -0.299,
        0.788,
        0.534,
        170.9,
        130.7,
        24.3
      ],
      [
        0,
        2,
        -1.022,
        -0.478,
        1.009,
        -0.726,
        -110.2,
        194.6,
        10.7
      ],
      [
        0,
        0,
        0.166,
        0.338,
        0.765,
        0.827,
        137.7,
        -20.5,
        16.1
      ],
      [
        0,
        0,
        0.152,
        0.525,
        0.733,
        0.627,
        173.6,
        3.7,
        17.2
      ],
      [
        0,
        0,
        0.093,
        0.6,
        0.748,
        0.713,
        183.2,
        6.1,
        -11.2
      ],
      [
        0,
        0,
        0.02,
        -0.005,
        0.715,
        0.288,
        72.4,
        -63.2,
        63.6
      ],
      [
        0,
        4,
        -0.333,
        -0.231,
        0.496,
        0.19,
        2.3,
        35.3,
        41.8
      ],
      [
        0,
        5,
        -0.26,
        -0.47,
        0.604,
        0.097,
        -32.8,
        10.6,
        -60.2
      ],
      [
        0,
        2,
        -0.672,
        -0.487,
        0.771,
        0.17,
        11.7,
        162.3,
        47.5
      ],
      [
        0,
        1,
        -0.704,
        -0.542,
        0.896,
        -0.805,
        -166.6,
        59.1,
        8.0
      ],
      [
        0,
        4,
        0.31,
        -0.083,
        0.681,
        0.22,
        -28.3,
        -11.5,
        88.1
      ],
      [
        0,
        2,
        0.117,
        -0.034,
        0.783,
        -0.061,
        27.1,
        182.8,
        49.5
      ],
      [
        0,
        0,
        -0.216,
        -0.948,
        0.455,
        0.139,
        30.3,
        12.7,
        -5.4
      ],
      [
        0,
        4,
        -0.866,
        -0.44,
        0.283,
        0.09,
        -32.0,
        -50.0,
        51.6
      ],
      [
        0,
        0,
        -0.428,
        0.205,
        0.797,
        0.756,
        250.5,
        81.1,
        110.0
      ],
      [
        0,
        2,
        -0.518,
        -0.644,
        0.923,
        -0.739,
        -25.1,
        113.3,
        -7.0
      ],
      [
        0,
        2,
        -0.757,
        -0.283,
        0.807,
        0.429,
        126.7,
        154.5,
        66.4
      ],
      [
        0,
        4,
        -0.37,
        -0.939,
        0.716,
        -0.343,
        -55.3,
        56.7,
        83.3
      ],
      [
        0,
        2,
        0.106,
        0.378,
        0.748,
        0.298,
        30.0,
        40.1,
        -36.5
      ],
      [
        0,
        4,
        0.229,
        0.108,
        0.701,
        0.292,
        -4.1,
        -21.5,
        93.7
      ],
      [
        0,
        4,
        -0.858,
        -0.569,
        0.659,
        -0.075,
        -80.0,
        -9.3,
        118.0
      ],
      [
        0,
        0,
        -0.772,
        -0.289,
        0.771,
        0.454,
        179.8,
        123.5,
        95.2
      ],
      [
        0,
        4,
        0.396,
        -0.349,
        0.689,
        0.131,
        -13.4,
        -3.1,
        80.5
      ],
      [
        0,
        5,
        -0.041,
        0.059,
        0.728,
        0.36,
        26.9,
        5.0,
        -63.4
      ],
      [
        0,
        5,
        -0.022,
        0.365,
        0.654,
        0.334,
        87.1,
        65.6,
        -119.5
      ],
      [
        0,
        0,
        -0.313,
        -1.04,
        0.46,
        0.261,
        31.7,
        -9.6,
        -0.7
      ],
      [
        0,
        2,
        -0.057,
        0.165,
        0.72,
        0.264,
        3.2,
        63.9,
        -46.9
      ],
      [
        0,
        2,
        0.04,
        0.465,
        0.741,
        0.043,
        -44.2,
        81.3,
        -23.3
      ],
      [
        0,
        4,
        0.399,
        -0.309,
        0.621,
        0.208,
        42.1,
        -14.0,
        81.6
      ],
      [
        0,
        0,
        0.094,
        0.423,
        0.735,
        0.638,
        153.5,
        -104.6,
        98.4
      ],
      [
        0,
        2,
        -1.04,
        -0.483,
        0.977,
        -0.621,
        -94.4,
        194.7,
        79.3
      ],
      [
        0,
        4,
        0.109,
        -0.292,
        0.617,
        0.253,
        9.9,
        -2.7,
        83.4
      ],
      [
        0,
        0,
        0.092,
        0.648,
        0.809,
        1.028,
        280.3,
        -23.6,
        -177.1
      ],
      [
        0,
        2,
        -0.338,
        -0.144,
        0.724,
        0.213,
        -33.1,
        137.5,
        -60.6
      ],
      [
        0,
        4,
        0.453,
        -0.361,
        0.707,
        0.307,
        6.1,
        -75.7,
        184.1
      ],
      [
        0,
        2,
        -0.163,
        -0.014,
        0.871,
        -0.22,
        -49.2,
        194.9,
        -165.1
      ],
      [
        0,
        0,
        0.025,
        0.499,
        0.795,
        0.886,
        212.8,
        31.8,
        -123.1
      ],
      [
        0,
        4,
        0.157,
        -0.706,
        0.745,
        0.255,
        -87.3,
        -21.4,
        224.0
      ],
      [
        0,
        4,
        0.04,
        -0.024,
        0.734,
        0.349,
        0.8,
        -12.4,
        19.2
      ],
      [
        0,
        1,
        -0.304,
        -1.04,
        0.397,
        0.212,
        -17.8,
        -14.2,
        1.6
      ],
      [
        0,
        0,
        0.425,
        -0.23,
        0.707,
        0.53,
        188.1,
        -37.6,
        89.9
      ],
      [
        0,
        0,
        0.071,
        0.486,
        0.739,
        0.54,
        217.6,
        -38.0,
        79.5
      ],
      [
        0,
        3,
        0.101,
        0.686,
        0.691,
        0.275,
        7.0,
        -11.2,
        -9.9
      ],
      [
        0,
        1,
        -0.387,
        -0.93,
        0.833,
        -0.559,
        -107.2,
        76.6,
        51.6
      ],
      [
        0,
        5,
        -0.318,
        -1.006,
        0.417,
        0.233,
        -4.9,
        -2.6,
        -54.7
      ],
      [
        0,
        5,
        -0.048,
        0.115,
        0.716,
        0.372,
        32.4,
        11.0,
        -97.8
      ],
      [
        0,
        1,
        -0.335,
        -1.04,
        0.454,
        0.151,
        -37.2,
        30.9,
        -1.8
      ],
      [
        0,
        4,
        0.351,
        -0.195,
        0.744,
        0.434,
        62.4,
        -28.2,
        178.9
      ],
      [
        0,
        4,
        0.441,
        -0.466,
        0.721,
        0.298,
        -10.5,
        -93.4,
        165.1
      ],
      [
        0,
        1,
        -0.436,
        -0.711,
        0.818,
        -0.514,
        -69.0,
        64.0,
        33.7
      ],
      [
        0,
        0,
        0.227,
        0.197,
        0.761,
        0.751,
        160.2,
        3.9,
        13.9
      ],
      [
        0,
        4,
        0.276,
        -0.504,
        0.756,
        0.385,
        37.2,
        -52.1,
        235.3
      ],
      [
        0,
        2,
        -0.992,
        -0.448,
        0.977,
        -0.616,
        -97.7,
        233.5,
        42.5
      ],
      [
        0,
        2,
        -1.0,
        -0.453,
        1.001,
        -0.696,
        -79.6,
        234.7,
        36.4
      ],
      [
        0,
        0,
        0.011,
        0.452,
        0.825,
        0.931,
        302.8,
        116.6,
        -157.8
      ],
      [
        0,
        3,
        0.427,
        -0.355,
        0.695,
        0.338,
        -14.2,
        -115.5,
        -20.3
      ],
      [
        0,
        0,
        0.022,
        0.587,
        0.697,
        0.417,
        148.4,
        29.0,
        53.8
      ],
      [
        0,
        4,
        0.295,
        -0.135,
        0.753,
        0.323,
        -1.5,
        -25.4,
        90.0
      ],
      [
        0,
        2,
        -0.667,
        -0.366,
        0.97,
        -0.789,
        -14.6,
        174.4,
        17.2
      ],
      [
        0,
        1,
        -0.315,
        -0.789,
        -1.04,
        -0.162,
        -276.6,
        -50.0,
        -205.4
      ],
      [
        0,
        0,
        0.117,
        0.549,
        0.727,
        0.626,
        163.9,
        -1.3,
        2.7
      ],
      [
        0,
        4,
        0.442,
        -0.305,
        0.681,
        0.195,
        -4.8,
        32.8,
        122.9
      ],
      [
        0,
        1,
        -0.41,
        -0.836,
        0.817,
        -0.524,
        -92.0,
        58.9,
        13.7
      ],
      [
        0,
        0,
        0.033,
        0.603,
        0.77,
        0.797,
        128.7,
        -118.8,
        91.0
      ],
      [
        0,
        3,
        0.44,
        -0.435,
        0.706,
        0.334,
        13.8,
        -167.3,
        102.6
      ],
      [
        0,
        1,
        -0.581,
        -0.775,
        0.24,
        0.09,
        -102.6,
        -25.6,
        64.2
      ],
      [
        0,
        3,
        0.439,
        -0.434,
        0.637,
        0.325,
        -29.4,
        -238.1,
        31.3
      ],
      [
        0,
        5,
        -0.073,
        0.132,
        0.749,
        0.475,
        66.9,
        22.0,
        -80.6
      ],
      [
        0,
        1,
        -0.641,
        -0.771,
        0.926,
        -0.918,
        -232.8,
        65.9,
        69.6
      ],
      [
        0,
        4,
        -0.751,
        -0.221,
        0.85,
        0.071,
        36.2,
        142.0,
        191.4
      ],
      [
        0,
        5,
        -0.046,
        0.243,
        0.816,
        0.897,
        176.9,
        98.9,
        -217.6
      ],
      [
        0,
        5,
        -0.31,
        -0.847,
        -0.711,
        -0.083,
        -153.8,
        14.5,
        -210.8
      ],
      [
        0,
        0,
        0.244,
        -0.727,
        0.727,
        0.082,
        130.4,
        60.9,
        122.7
      ],
      [
        0,
        2,
        -1.04,
        -0.448,
        1.009,
        -0.715,
        -107.3,
        230.5,
        93.6
      ],
      [
        0,
        2,
        -0.138,
        -0.031,
        0.785,
        0.157,
        43.7,
        115.3,
        -1.7
      ],
      [
        0,
        4,
        -0.054,
        -0.686,
        0.712,
        0.233,
        -17.7,
        -25.4,
        203.5
      ],
      [
        0,
        4,
        0.012,
        -0.064,
        0.705,
        0.253,
        3.1,
        -25.4,
        94.2
      ],
      [
        0,
        5,
        -0.075,
        0.14,
        0.703,
        0.219,
        37.8,
        52.4,
        -84.3
      ],
      [
        0,
        1,
        -0.726,
        -0.714,
        0.994,
        -1.04,
        -241.0,
        82.2,
        51.7
      ],
      [
        0,
        4,
        0.384,
        -0.471,
        0.626,
        0.253,
        -5.5,
        -45.5,
        58.5
      ],
      [
        0,
        5,
        -0.291,
        -0.886,
        0.17,
        0.133,
        -39.0,
        25.5,
        -127.0
      ],
      [
        0,
        2,
        -0.376,
        -0.218,
        0.746,
        0.079,
        -66.6,
        205.4,
        -136.9
      ],
      [
        0,
        2,
        -1.033,
        -0.484,
        0.997,
        -0.7,
        -110.1,
        221.0,
        51.6
      ],
      [
        0,
        5,
        0.018,
        0.319,
        0.66,
        0.258,
        -0.7,
        65.1,
        -97.6
      ],
      [
        0,
        1,
        -0.326,
        -1.04,
        0.403,
        0.2,
        -40.0,
        15.2,
        -16.8
      ],
      [
        0,
        0,
        0.087,
        0.399,
        0.72,
        0.447,
        145.5,
        -25.7,
        96.1
      ],
      [
        0,
        4,
        -0.28,
        -0.985,
        0.085,
        0.055,
        -16.6,
        -82.3,
        115.0
      ],
      [
        0,
        4,
        0.193,
        -0.718,
        0.546,
        0.234,
        12.1,
        -3.6,
        67.9
      ],
      [
        0,
        2,
        -0.828,
        -0.209,
        0.884,
        0.321,
        153.6,
        190.7,
        134.3
      ],
      [
        0,
        4,
        0.122,
        -0.194,
        0.718,
        0.303,
        5.1,
        -4.9,
        104.3
      ],
      [
        0,
        4,
        0.236,
        -0.143,
        0.726,
        0.315,
        -20.9,
        -9.7,
        89.7
      ],
      [
        0,
        0,
        0.055,
        0.151,
        0.731,
        0.293,
        43.9,
        18.1,
        -40.8
      ],
      [
        0,
        0,
        0.094,
        0.664,
        0.816,
        1.023,
        297.7,
        -45.3,
        -116.4
      ],
      [
        0,
        3,
        0.403,
        -0.448,
        0.698,
        0.327,
        -13.7,
        -158.0,
        87.6
      ],
      [
        0,
        2,
        -0.345,
        -0.193,
        0.685,
        0.11,
        -52.7,
        190.0,
        -172.2
      ],
      [
        0,
        4,
        -0.393,
        -0.447,
        0.682,
        0.218,
        -7.9,
        -16.4,
        49.7
      ],
      [
        0,
        2,
        -0.997,
        -0.522,
        0.96,
        -0.657,
        -124.7,
        200.6,
        60.7
      ],
      [
        0,
        0,
        0.035,
        0.602,
        0.795,
        0.593,
        184.7,
        69.7,
        115.8
      ],
      [
        0,
        2,
        -0.796,
        -0.216,
        0.842,
        0.02,
        39.2,
        164.8,
        163.2
      ],
      [
        0,
        0,
        -0.039,
        0.508,
        0.751,
        0.517,
        169.4,
        -26.7,
        109.3
      ],
      [
        0,
        2,
        -1.037,
        -0.47,
        0.973,
        -0.602,
        -94.4,
        189.8,
        55.2
      ],
      [
        0,
        5,
        0.127,
        0.646,
        0.772,
        0.815,
        160.8,
        -38.1,
        -207.9
      ],
      [
        0,
        1,
        -0.38,
        -0.899,
        -0.671,
        -0.063,
        -207.7,
        -132.1,
        6.6
      ],
      [
        0,
        1,
        -0.32,
        -0.802,
        -1.04,
        -0.167,
        -276.2,
        -127.3,
        -112.5
      ],
      [
        0,
        0,
        0.067,
        0.613,
        0.797,
        0.769,
        343.1,
        35.7,
        -5.7
      ],
      [
        0,
        2,
        0.404,
        -0.384,
        0.589,
        0.156,
        -5.2,
        66.3,
        42.5
      ],
      [
        0,
        2,
        -1.04,
        -0.443,
        0.975,
        -0.592,
        -62.5,
        211.1,
        31.8
      ],
      [
        0,
        4,
        -0.099,
        -0.189,
        0.668,
        0.306,
        16.7,
        -49.2,
        179.5
      ],
      [
        0,
        2,
        -0.682,
        -0.397,
        0.977,
        -0.819,
        17.7,
        188.4,
        -5.4
      ],
      [
        0,
        5,
        -0.012,
        0.109,
        0.72,
        0.334,
        6.3,
        -40.5,
        -49.4
      ],
      [
        0,
        1,
        -0.592,
        -0.806,
        0.944,
        -1.0,
        -237.6,
        32.3,
        27.8
      ],
      [
        0,
        1,
        -0.751,
        -0.65,
        0.985,
        -1.04,
        -212.5,
        100.9,
        41.6
      ],
      [
        0,
        5,
        0.336,
        -0.003,
        0.672,
        0.124,
        24.9,
        120.7,
        -121.6
      ],
      [
        1,
        4,
        0.774,
        -0.524,
        0.82,
        0.216,
        47.8,
        88.9,
        96.3
      ],
      [
        1,
        2,
        0.089,
        0.002,
        0.909,
        -0.735,
        -9.4,
        53.2,
        -3.8
      ],
      [
        1,
        3,
        0.786,
        -0.696,
        0.742,
        0.371,
        1.3,
        -134.2,
        11.8
      ],
      [
        1,
        0,
        0.362,
        0.319,
        0.715,
        0.637,
        151.4,
        -28.9,
        -67.2
      ],
      [
        1,
        1,
        0.082,
        0.012,
        0.67,
        -0.239,
        -96.9,
        48.0,
        55.4
      ],
      [
        1,
        5,
        0.342,
        0.045,
        0.742,
        0.37,
        45.6,
        16.4,
        -66.0
      ],
      [
        1,
        0,
        0.808,
        -0.739,
        0.726,
        0.115,
        128.3,
        61.3,
        120.1
      ],
      [
        1,
        5,
        0.404,
        0.291,
        0.681,
        0.131,
        11.1,
        121.5,
        -140.2
      ],
      [
        1,
        4,
        0.774,
        -0.82,
        0.672,
        0.236,
        51.5,
        -24.4,
        208.3
      ],
      [
        1,
        3,
        0.613,
        -0.323,
        0.685,
        0.275,
        48.8,
        -113.6,
        -51.3
      ],
      [
        1,
        5,
        0.237,
        -0.048,
        0.584,
        0.16,
        -2.8,
        12.7,
        -28.1
      ],
      [
        1,
        0,
        0.41,
        0.261,
        0.848,
        1.04,
        228.8,
        69.8,
        -175.5
      ],
      [
        1,
        0,
        0.645,
        -0.1,
        0.795,
        0.662,
        218.1,
        48.2,
        45.3
      ],
      [
        1,
        0,
        0.625,
        -0.031,
        0.685,
        0.378,
        148.1,
        29.0,
        53.4
      ],
      [
        1,
        4,
        0.796,
        -0.787,
        0.72,
        0.237,
        16.3,
        -14.3,
        63.1
      ],
      [
        1,
        3,
        0.68,
        -0.657,
        0.658,
        0.326,
        -23.1,
        -59.7,
        36.1
      ],
      [
        1,
        4,
        0.795,
        -0.82,
        0.663,
        0.242,
        -3.5,
        -4.8,
        79.3
      ],
      [
        1,
        5,
        -0.031,
        0.023,
        0.408,
        0.203,
        -49.6,
        31.1,
        -89.4
      ],
      [
        1,
        4,
        0.071,
        -0.059,
        -0.235,
        0.014,
        -90.4,
        -54.1,
        91.4
      ],
      [
        1,
        2,
        0.326,
        0.028,
        0.706,
        -0.162,
        -28.9,
        120.4,
        -65.9
      ],
      [
        1,
        5,
        0.739,
        -0.558,
        0.704,
        0.314,
        45.4,
        -13.5,
        -45.4
      ],
      [
        1,
        4,
        0.57,
        -0.574,
        0.673,
        0.167,
        -49.6,
        33.2,
        76.4
      ],
      [
        1,
        5,
        0.357,
        0.01,
        0.695,
        0.29,
        -50.4,
        76.8,
        -297.2
      ],
      [
        1,
        0,
        0.989,
        -0.332,
        0.772,
        0.233,
        150.3,
        128.6,
        98.2
      ],
      [
        1,
        0,
        0.571,
        -0.194,
        0.809,
        0.66,
        192.1,
        33.4,
        130.7
      ],
      [
        1,
        5,
        0.236,
        -0.034,
        -0.789,
        -0.065,
        -134.2,
        -21.1,
        -175.5
      ],
      [
        1,
        4,
        0.776,
        -0.773,
        0.681,
        0.311,
        19.8,
        -46.1,
        146.9
      ],
      [
        1,
        4,
        0.777,
        -0.687,
        0.761,
        0.323,
        -4.9,
        -37.6,
        71.2
      ],
      [
        1,
        0,
        0.641,
        -0.086,
        0.802,
        0.748,
        179.5,
        -13.9,
        131.1
      ],
      [
        1,
        2,
        1.04,
        -0.329,
        0.977,
        -0.624,
        -76.5,
        218.7,
        104.0
      ],
      [
        1,
        0,
        0.858,
        -0.366,
        0.804,
        0.494,
        172.9,
        105.7,
        91.5
      ],
      [
        1,
        1,
        0.287,
        -0.516,
        0.971,
        -1.04,
        -245.6,
        68.9,
        59.6
      ],
      [
        1,
        0,
        1.007,
        -0.293,
        0.739,
        0.381,
        180.9,
        124.0,
        93.1
      ],
      [
        1,
        2,
        1.04,
        -0.323,
        0.885,
        0.342,
        149.2,
        211.0,
        73.6
      ],
      [
        1,
        2,
        0.547,
        -0.155,
        0.803,
        -0.025,
        -59.3,
        167.7,
        52.9
      ],
      [
        1,
        2,
        0.546,
        -0.199,
        0.782,
        0.163,
        43.7,
        115.4,
        -2.0
      ],
      [
        1,
        2,
        0.206,
        -0.023,
        0.977,
        -0.834,
        0.0,
        151.7,
        26.3
      ],
      [
        1,
        4,
        0.785,
        -0.765,
        0.508,
        0.209,
        11.6,
        -3.2,
        67.0
      ],
      [
        1,
        1,
        0.064,
        0.016,
        0.88,
        -0.659,
        -89.0,
        41.0,
        55.2
      ],
      [
        1,
        4,
        0.69,
        -0.766,
        0.6,
        0.266,
        8.9,
        -2.4,
        83.4
      ],
      [
        1,
        4,
        0.766,
        -0.428,
        0.713,
        0.249,
        8.5,
        32.5,
        53.5
      ],
      [
        1,
        0,
        0.842,
        -0.387,
        0.787,
        0.589,
        188.2,
        81.1,
        67.7
      ],
      [
        1,
        1,
        0.362,
        -0.092,
        -1.04,
        -0.169,
        -269.6,
        -105.1,
        -155.6
      ],
      [
        1,
        2,
        0.94,
        -0.335,
        0.888,
        0.345,
        165.3,
        189.2,
        166.3
      ],
      [
        1,
        4,
        0.754,
        -0.768,
        0.708,
        0.268,
        -14.8,
        -35.7,
        101.9
      ],
      [
        1,
        0,
        0.579,
        0.132,
        0.714,
        0.648,
        162.3,
        -9.3,
        10.3
      ],
      [
        1,
        5,
        0.342,
        0.291,
        0.675,
        0.144,
        6.5,
        84.6,
        -138.0
      ],
      [
        1,
        4,
        0.673,
        -0.184,
        0.738,
        0.767,
        139.1,
        -81.4,
        145.3
      ],
      [
        1,
        2,
        1.0,
        -0.283,
        0.774,
        0.372,
        61.8,
        93.7,
        -16.5
      ],
      [
        1,
        4,
        0.789,
        -0.81,
        0.763,
        0.472,
        37.0,
        -15.8,
        196.6
      ],
      [
        1,
        0,
        0.61,
        0.068,
        0.75,
        0.56,
        144.8,
        25.9,
        15.4
      ],
      [
        1,
        0,
        0.577,
        -0.152,
        0.771,
        0.805,
        128.7,
        -118.9,
        91.2
      ],
      [
        1,
        5,
        0.227,
        -0.037,
        0.362,
        0.192,
        -72.0,
        88.8,
        -144.1
      ],
      [
        1,
        4,
        0.797,
        -0.737,
        0.742,
        0.265,
        -0.5,
        -12.7,
        37.5
      ],
      [
        1,
        5,
        0.235,
        0.221,
        0.695,
        0.259,
        -6.7,
        14.3,
        -35.7
      ],
      [
        1,
        4,
        0.346,
        -0.134,
        0.795,
        -0.376,
        -91.7,
        3.2,
        109.8
      ],
      [
        1,
        0,
        0.437,
        0.292,
        0.815,
        1.005,
        279.6,
        -5.9,
        -163.3
      ],
      [
        1,
        0,
        0.436,
        0.267,
        0.785,
        0.654,
        268.7,
        159.7,
        -128.6
      ],
      [
        1,
        1,
        0.487,
        -0.473,
        0.994,
        -1.04,
        -241.0,
        82.0,
        51.5
      ],
      [
        1,
        4,
        0.727,
        -0.614,
        0.707,
        0.274,
        -33.9,
        -26.2,
        78.1
      ],
      [
        1,
        2,
        1.04,
        -0.332,
        1.019,
        -0.725,
        -134.5,
        182.1,
        61.9
      ],
      [
        1,
        4,
        0.022,
        0.021,
        0.559,
        0.297,
        8.7,
        4.4,
        16.4
      ],
      [
        1,
        1,
        0.255,
        -0.074,
        -1.04,
        -0.164,
        -272.8,
        -170.3,
        -140.3
      ],
      [
        1,
        2,
        1.04,
        -0.324,
        0.97,
        -0.674,
        -75.8,
        206.8,
        75.6
      ],
      [
        1,
        1,
        0.378,
        -0.224,
        0.968,
        -1.04,
        -217.7,
        82.7,
        14.7
      ],
      [
        1,
        0,
        0.874,
        -0.291,
        0.754,
        0.391,
        130.3,
        118.9,
        100.6
      ],
      [
        1,
        5,
        0.388,
        -0.033,
        0.528,
        0.138,
        -87.9,
        128.8,
        -302.8
      ],
      [
        1,
        0,
        0.403,
        0.229,
        0.83,
        1.04,
        246.1,
        -33.2,
        -185.6
      ],
      [
        1,
        2,
        1.029,
        -0.314,
        0.995,
        -0.68,
        -86.8,
        244.8,
        36.7
      ],
      [
        1,
        2,
        0.091,
        -0.004,
        0.905,
        -0.72,
        -19.9,
        89.1,
        5.4
      ],
      [
        1,
        0,
        0.67,
        -0.044,
        0.784,
        0.66,
        243.5,
        41.5,
        35.7
      ],
      [
        1,
        4,
        0.807,
        -0.812,
        0.619,
        0.237,
        30.8,
        -49.7,
        158.6
      ],
      [
        1,
        5,
        0.386,
        0.232,
        0.81,
        0.993,
        183.0,
        -16.9,
        -216.1
      ],
      [
        1,
        5,
        0.654,
        -0.353,
        0.726,
        0.291,
        -4.1,
        34.9,
        -36.2
      ],
      [
        1,
        3,
        0.756,
        -0.618,
        0.724,
        0.345,
        -2.1,
        -46.2,
        17.0
      ],
      [
        1,
        4,
        0.779,
        -0.776,
        0.756,
        0.328,
        -1.4,
        -25.4,
        90.0
      ],
      [
        1,
        2,
        1.04,
        -0.315,
        0.789,
        0.389,
        136.5,
        140.3,
        91.8
      ],
      [
        1,
        4,
        0.791,
        -0.731,
        0.675,
        0.243,
        -3.5,
        -44.2,
        58.8
      ],
      [
        1,
        1,
        0.077,
        -0.021,
        0.879,
        -0.659,
        -89.5,
        36.8,
        20.5
      ],
      [
        1,
        4,
        0.521,
        -0.51,
        0.339,
        0.156,
        57.8,
        -17.1,
        103.9
      ],
      [
        1,
        4,
        0.748,
        -0.76,
        0.739,
        0.285,
        -7.4,
        -65.0,
        190.6
      ],
      [
        1,
        4,
        0.729,
        -0.784,
        0.678,
        0.29,
        35.1,
        -57.6,
        131.5
      ],
      [
        1,
        1,
        0.649,
        -0.351,
        0.507,
        0.178,
        -67.7,
        -6.4,
        17.5
      ],
      [
        1,
        4,
        0.811,
        -0.783,
        0.65,
        0.261,
        3.8,
        -54.9,
        84.5
      ],
      [
        1,
        0,
        0.758,
        -0.232,
        0.777,
        0.341,
        176.8,
        108.8,
        81.8
      ],
      [
        1,
        2,
        0.934,
        -0.321,
        0.961,
        -0.656,
        -123.3,
        201.5,
        57.1
      ],
      [
        1,
        2,
        1.04,
        -0.324,
        0.872,
        0.003,
        55.3,
        198.6,
        67.1
      ],
      [
        1,
        0,
        1.0,
        -0.291,
        0.783,
        0.547,
        187.0,
        67.2,
        121.2
      ],
      [
        1,
        2,
        0.144,
        -0.014,
        0.904,
        -0.673,
        -47.1,
        135.7,
        38.8
      ],
      [
        1,
        4,
        0.018,
        0.009,
        -0.107,
        0.043,
        -72.6,
        -49.3,
        96.1
      ],
      [
        1,
        2,
        1.04,
        -0.32,
        1.0,
        -0.684,
        -79.5,
        234.8,
        35.7
      ],
      [
        1,
        5,
        0.385,
        0.28,
        0.67,
        0.155,
        -15.1,
        99.4,
        -129.7
      ],
      [
        1,
        5,
        0.425,
        0.155,
        0.769,
        0.87,
        190.3,
        -58.1,
        -194.2
      ],
      [
        1,
        5,
        -0.052,
        0.04,
        0.384,
        0.19,
        -48.7,
        -2.2,
        -73.6
      ],
      [
        1,
        1,
        0.736,
        -0.306,
        0.97,
        -1.04,
        -183.7,
        97.8,
        37.5
      ],
      [
        1,
        1,
        0.317,
        -0.148,
        -1.004,
        -0.133,
        -320.5,
        -61.4,
        -74.4
      ],
      [
        1,
        4,
        0.802,
        -0.803,
        0.738,
        0.433,
        62.3,
        -28.2,
        178.9
      ],
      [
        1,
        0,
        0.539,
        0.096,
        0.745,
        0.714,
        150.5,
        -38.8,
        -20.4
      ],
      [
        1,
        0,
        0.635,
        -0.275,
        0.757,
        0.544,
        224.0,
        6.7,
        77.3
      ],
      [
        1,
        0,
        1.039,
        -0.305,
        0.797,
        0.656,
        190.4,
        126.1,
        11.1
      ],
      [
        1,
        3,
        0.712,
        -0.557,
        0.726,
        0.415,
        9.6,
        -61.2,
        36.5
      ],
      [
        1,
        1,
        0.023,
        0.016,
        0.405,
        0.214,
        -17.3,
        -13.4,
        -1.0
      ],
      [
        1,
        1,
        0.261,
        -0.084,
        -1.04,
        -0.147,
        -276.9,
        -82.7,
        -83.7
      ],
      [
        1,
        5,
        0.449,
        -0.094,
        0.716,
        0.331,
        33.8,
        8.1,
        -66.9
      ],
      [
        1,
        4,
        0.788,
        -0.731,
        0.69,
        0.242,
        -8.3,
        -44.9,
        91.2
      ],
      [
        1,
        2,
        1.035,
        -0.32,
        1.032,
        -0.726,
        -139.2,
        183.7,
        27.8
      ],
      [
        1,
        4,
        0.78,
        -0.797,
        0.732,
        0.412,
        94.5,
        -10.9,
        226.2
      ],
      [
        1,
        2,
        1.037,
        -0.317,
        1.0,
        -0.705,
        -66.8,
        201.5,
        53.5
      ],
      [
        1,
        5,
        0.315,
        0.222,
        0.656,
        0.16,
        -18.3,
        72.5,
        -105.8
      ],
      [
        1,
        2,
        0.781,
        -0.727,
        0.836,
        0.2,
        57.0,
        176.0,
        148.6
      ],
      [
        1,
        4,
        0.779,
        -0.814,
        0.708,
        0.245,
        26.9,
        -46.3,
        164.1
      ],
      [
        1,
        4,
        0.811,
        -0.82,
        0.734,
        0.28,
        -6.6,
        -18.2,
        145.9
      ],
      [
        1,
        0,
        0.561,
        0.125,
        0.808,
        0.932,
        302.9,
        -18.6,
        -90.6
      ],
      [
        1,
        5,
        0.337,
        -0.021,
        0.66,
        0.267,
        -54.2,
        35.9,
        -273.3
      ],
      [
        1,
        4,
        -0.037,
        0.052,
        0.512,
        0.261,
        -4.3,
        -7.3,
        13.0
      ],
      [
        1,
        4,
        0.769,
        -0.733,
        0.66,
        0.26,
        -32.3,
        -53.1,
        129.8
      ],
      [
        1,
        0,
        0.411,
        0.271,
        0.812,
        1.032,
        279.8,
        -23.5,
        -176.9
      ],
      [
        1,
        5,
        0.373,
        0.075,
        0.733,
        0.523,
        84.0,
        -0.8,
        -244.2
      ],
      [
        1,
        2,
        1.04,
        -0.337,
        0.876,
        0.336,
        148.3,
        214.4,
        153.7
      ],
      [
        1,
        2,
        0.403,
        0.138,
        0.799,
        -0.265,
        -59.0,
        136.5,
        -109.5
      ],
      [
        1,
        3,
        0.769,
        -0.728,
        0.677,
        0.318,
        -83.4,
        -189.9,
        82.6
      ],
      [
        1,
        0,
        0.45,
        0.137,
        0.761,
        0.757,
        137.8,
        8.0,
        -10.1
      ],
      [
        1,
        0,
        0.962,
        -0.297,
        0.826,
        0.07,
        111.3,
        76.9,
        25.0
      ],
      [
        1,
        5,
        0.392,
        0.211,
        0.736,
        0.54,
        95.1,
        4.3,
        -178.6
      ],
      [
        1,
        2,
        0.746,
        -0.202,
        0.982,
        -0.813,
        -19.2,
        181.9,
        -19.5
      ],
      [
        1,
        0,
        0.647,
        -0.062,
        0.709,
        0.677,
        172.3,
        -52.9,
        70.2
      ],
      [
        1,
        0,
        0.471,
        -0.34,
        0.684,
        0.28,
        25.2,
        16.4,
        22.6
      ],
      [
        1,
        0,
        0.658,
        -0.168,
        0.724,
        0.441,
        145.5,
        -25.6,
        96.1
      ],
      [
        1,
        0,
        0.439,
        0.244,
        0.831,
        0.965,
        302.4,
        116.4,
        -157.7
      ],
      [
        1,
        3,
        0.607,
        -0.31,
        0.72,
        0.343,
        20.4,
        -36.6,
        10.4
      ],
      [
        1,
        4,
        0.695,
        -0.709,
        0.09,
        0.081,
        -67.9,
        -20.2,
        75.6
      ],
      [
        1,
        1,
        0.107,
        0.016,
        0.813,
        -0.49,
        -105.8,
        59.2,
        37.5
      ],
      [
        1,
        2,
        0.959,
        -0.345,
        0.873,
        0.243,
        121.1,
        208.6,
        159.7
      ],
      [
        1,
        0,
        -0.056,
        0.006,
        0.699,
        0.269,
        20.7,
        0.9,
        -5.4
      ],
      [
        1,
        4,
        0.7,
        -0.721,
        0.375,
        0.141,
        -46.4,
        -30.8,
        68.5
      ],
      [
        1,
        5,
        0.358,
        0.238,
        0.655,
        0.182,
        10.0,
        67.1,
        -103.6
      ],
      [
        1,
        2,
        0.606,
        -0.325,
        0.739,
        0.256,
        14.2,
        79.7,
        13.8
      ],
      [
        1,
        2,
        1.04,
        -0.315,
        0.898,
        -0.336,
        10.1,
        205.5,
        51.5
      ],
      [
        1,
        0,
        0.48,
        0.168,
        0.726,
        0.665,
        158.7,
        -5.0,
        -41.5
      ],
      [
        1,
        2,
        0.513,
        -0.126,
        0.97,
        -0.776,
        15.0,
        170.8,
        8.8
      ],
      [
        1,
        4,
        0.759,
        -0.807,
        0.757,
        0.183,
        57.8,
        85.5,
        144.4
      ],
      [
        1,
        1,
        0.236,
        -0.071,
        -1.04,
        -0.163,
        -275.9,
        -127.4,
        -112.6
      ],
      [
        1,
        2,
        1.04,
        -0.326,
        0.998,
        -0.699,
        -58.6,
        216.7,
        17.9
      ],
      [
        1,
        0,
        0.581,
        -0.249,
        0.779,
        0.599,
        171.1,
        22.2,
        90.1
      ],
      [
        1,
        1,
        0.397,
        -0.328,
        0.895,
        -0.949,
        -237.4,
        65.5,
        59.8
      ],
      [
        1,
        2,
        0.75,
        -0.755,
        0.671,
        0.083,
        22.5,
        67.9,
        -2.0
      ],
      [
        1,
        0,
        0.657,
        -0.068,
        0.755,
        0.829,
        184.1,
        -60.9,
        97.3
      ],
      [
        1,
        2,
        1.04,
        -0.321,
        0.836,
        -0.251,
        -84.6,
        191.7,
        54.3
      ],
      [
        1,
        4,
        0.724,
        -0.78,
        0.72,
        0.226,
        -28.2,
        -58.1,
        80.2
      ],
      [
        1,
        1,
        0.001,
        0.031,
        0.412,
        0.212,
        -23.9,
        1.3,
        -0.1
      ],
      [
        1,
        2,
        0.617,
        -0.066,
        0.886,
        -0.405,
        20.8,
        121.7,
        95.3
      ],
      [
        1,
        4,
        0.093,
        -0.148,
        0.402,
        0.176,
        51.3,
        -30.3,
        93.4
      ],
      [
        1,
        1,
        0.348,
        -0.055,
        -0.999,
        -0.137,
        -260.0,
        0.6,
        -181.2
      ],
      [
        1,
        0,
        0.609,
        -0.091,
        0.763,
        0.829,
        137.7,
        -20.5,
        16.2
      ],
      [
        1,
        1,
        0.735,
        -0.82,
        0.621,
        0.201,
        -19.9,
        14.2,
        18.4
      ],
      [
        1,
        5,
        0.37,
        0.103,
        0.821,
        0.947,
        125.5,
        5.2,
        -203.4
      ],
      [
        1,
        5,
        0.264,
        0.035,
        0.693,
        0.337,
        7.4,
        69.4,
        -213.4
      ],
      [
        1,
        5,
        0.316,
        -0.001,
        0.555,
        0.258,
        17.2,
        -15.6,
        -215.8
      ],
      [
        1,
        4,
        0.81,
        -0.806,
        0.722,
        0.338,
        17.6,
        -98.5,
        206.0
      ],
      [
        1,
        2,
        1.039,
        -0.319,
        0.983,
        -0.63,
        -112.0,
        233.9,
        33.9
      ],
      [
        1,
        2,
        0.781,
        -0.221,
        0.982,
        -0.832,
        -14.5,
        174.7,
        17.0
      ],
      [
        1,
        1,
        0.021,
        0.025,
        0.378,
        0.199,
        -33.3,
        -7.3,
        -14.2
      ],
      [
        1,
        0,
        0.696,
        -0.034,
        0.799,
        0.781,
        293.2,
        61.6,
        26.6
      ],
      [
        1,
        2,
        1.04,
        -0.322,
        0.87,
        0.318,
        141.5,
        216.8,
        98.2
      ],
      [
        1,
        4,
        0.767,
        -0.825,
        0.757,
        0.444,
        67.4,
        -21.1,
        210.2
      ],
      [
        1,
        4,
        0.798,
        -0.742,
        0.712,
        0.299,
        19.9,
        -58.4,
        143.1
      ],
      [
        1,
        2,
        0.162,
        -0.123,
        0.664,
        -0.121,
        -31.4,
        57.3,
        -37.6
      ],
      [
        1,
        0,
        0.723,
        -0.224,
        0.67,
        0.376,
        167.0,
        41.3,
        99.2
      ],
      [
        1,
        2,
        0.411,
        0.286,
        0.686,
        0.146,
        -4.8,
        96.4,
        -89.9
      ],
      [
        1,
        0,
        0.63,
        -0.399,
        0.719,
        0.326,
        51.7,
        4.3,
        -42.6
      ],
      [
        1,
        4,
        0.85,
        -0.521,
        0.891,
        0.364,
        151.7,
        185.0,
        215.4
      ],
      [
        1,
        0,
        0.661,
        -0.094,
        0.803,
        0.619,
        269.5,
        74.3,
        56.3
      ],
      [
        1,
        2,
        0.305,
        0.081,
        0.703,
        0.038,
        -1.6,
        99.1,
        -56.8
      ],
      [
        1,
        3,
        0.7,
        -0.424,
        0.702,
        0.365,
        103.8,
        -116.0,
        42.0
      ],
      [
        1,
        0,
        0.498,
        -0.137,
        0.717,
        0.331,
        83.0,
        2.5,
        -81.3
      ],
      [
        1,
        2,
        0.753,
        -0.58,
        0.813,
        -0.233,
        4.8,
        130.0,
        117.0
      ],
      [
        1,
        5,
        0.388,
        -0.031,
        0.722,
        0.09,
        -68.9,
        172.0,
        -217.8
      ],
      [
        1,
        4,
        0.248,
        -0.236,
        0.263,
        0.12,
        -14.0,
        -67.4,
        101.0
      ],
      [
        1,
        2,
        0.401,
        0.128,
        0.799,
        -0.219,
        9.6,
        183.2,
        -8.4
      ],
      [
        1,
        1,
        0.003,
        0.026,
        0.469,
        0.122,
        -38.5,
        6.2,
        -27.0
      ],
      [
        2,
        4,
        0.101,
        0.186,
        0.768,
        -0.029,
        -15.2,
        44.4,
        115.0
      ],
      [
        2,
        2,
        -1.009,
        -0.4,
        1.008,
        -0.719,
        -107.3,
        230.4,
        93.3
      ],
      [
        2,
        5,
        0.208,
        0.737,
        0.684,
        0.122,
        11.1,
        121.6,
        -140.2
      ],
      [
        2,
        4,
        -0.657,
        -0.2,
        0.891,
        0.366,
        151.7,
        185.0,
        215.4
      ],
      [
        2,
        0,
        0.231,
        1.04,
        0.831,
        0.947,
        293.2,
        53.2,
        -141.1
      ],
      [
        2,
        4,
        -0.277,
        -0.86,
        0.331,
        0.128,
        -44.5,
        -49.2,
        66.7
      ],
      [
        2,
        4,
        -0.204,
        -0.083,
        0.756,
        0.182,
        57.4,
        84.7,
        145.1
      ],
      [
        2,
        1,
        -0.415,
        -0.691,
        -1.04,
        -0.15,
        -299.1,
        39.5,
        -185.3
      ],
      [
        2,
        3,
        0.046,
        0.091,
        0.635,
        0.213,
        17.2,
        -30.0,
        15.2
      ],
      [
        2,
        2,
        0.163,
        -0.052,
        0.805,
        -0.173,
        4.8,
        130.1,
        117.0
      ],
      [
        2,
        4,
        -0.207,
        -0.186,
        0.819,
        0.218,
        47.8,
        88.9,
        96.4
      ],
      [
        2,
        2,
        0.192,
        0.603,
        0.676,
        0.131,
        -11.8,
        99.5,
        -91.2
      ],
      [
        2,
        2,
        0.528,
        0.093,
        0.767,
        -0.11,
        26.9,
        164.6,
        15.6
      ],
      [
        2,
        2,
        -0.651,
        -0.409,
        0.965,
        -0.763,
        15.2,
        170.5,
        8.5
      ],
      [
        2,
        3,
        0.249,
        -0.197,
        0.699,
        0.388,
        13.9,
        -150.4,
        43.5
      ],
      [
        2,
        4,
        0.01,
        -0.065,
        0.719,
        0.258,
        -1.2,
        -34.3,
        172.8
      ],
      [
        2,
        5,
        0.061,
        -0.02,
        0.686,
        0.324,
        22.1,
        -0.4,
        -48.8
      ],
      [
        2,
        5,
        0.249,
        0.669,
        0.689,
        0.295,
        -11.0,
        -20.6,
        -71.5
      ],
      [
        2,
        5,
        0.25,
        0.778,
        0.691,
        0.356,
        -8.1,
        -16.0,
        -152.9
      ],
      [
        2,
        5,
        -0.223,
        -1.036,
        0.382,
        0.208,
        -48.8,
        -2.2,
        -73.6
      ],
      [
        2,
        2,
        -0.993,
        -0.483,
        0.988,
        -0.657,
        -116.0,
        194.3,
        82.4
      ],
      [
        2,
        5,
        0.286,
        0.441,
        0.688,
        0.236,
        9.7,
        38.7,
        -118.5
      ],
      [
        2,
        0,
        0.106,
        0.284,
        0.777,
        0.621,
        174.4,
        16.0,
        98.2
      ],
      [
        2,
        0,
        0.228,
        1.04,
        0.754,
        0.722,
        170.0,
        24.6,
        -2.1
      ],
      [
        2,
        4,
        0.106,
        -0.044,
        0.672,
        0.23,
        21.9,
        -72.7,
        138.7
      ],
      [
        2,
        4,
        0.179,
        -0.214,
        0.72,
        0.039,
        16.3,
        14.4,
        52.5
      ],
      [
        2,
        4,
        0.025,
        -0.043,
        0.717,
        0.24,
        -22.4,
        -62.2,
        195.6
      ],
      [
        2,
        4,
        0.07,
        0.257,
        0.727,
        0.339,
        103.9,
        -78.5,
        107.3
      ],
      [
        2,
        2,
        -0.069,
        -0.848,
        0.423,
        0.141,
        7.1,
        47.3,
        -8.6
      ],
      [
        2,
        2,
        -0.744,
        -0.249,
        0.783,
        0.432,
        153.1,
        190.6,
        7.8
      ],
      [
        2,
        2,
        0.543,
        0.181,
        0.783,
        -0.044,
        50.5,
        113.0,
        71.5
      ],
      [
        2,
        4,
        0.079,
        0.057,
        0.764,
        0.327,
        -4.8,
        -37.5,
        71.2
      ],
      [
        2,
        2,
        0.259,
        1.019,
        0.842,
        -0.256,
        23.9,
        200.8,
        31.4
      ],
      [
        2,
        4,
        -0.71,
        -0.229,
        0.707,
        0.247,
        2.0,
        44.8,
        82.6
      ],
      [
        2,
        1,
        -0.677,
        -0.658,
        0.533,
        0.066,
        -73.4,
        -34.7,
        21.6
      ],
      [
        2,
        0,
        -0.039,
        0.465,
        0.766,
        0.514,
        200.5,
        38.5,
        119.9
      ],
      [
        2,
        1,
        -0.345,
        -0.961,
        -0.722,
        -0.077,
        -249.9,
        -61.7,
        -37.0
      ],
      [
        2,
        0,
        0.257,
        0.738,
        0.832,
        1.012,
        309.4,
        62.4,
        -134.7
      ],
      [
        2,
        0,
        -0.391,
        -0.103,
        0.762,
        0.437,
        163.5,
        155.2,
        -101.2
      ],
      [
        2,
        4,
        0.108,
        -0.019,
        0.652,
        0.245,
        -3.5,
        -44.1,
        58.8
      ],
      [
        2,
        4,
        -0.397,
        -0.115,
        0.846,
        0.14,
        57.6,
        153.5,
        190.6
      ],
      [
        2,
        0,
        0.045,
        0.64,
        0.77,
        0.8,
        128.8,
        -118.9,
        91.2
      ],
      [
        2,
        1,
        -0.302,
        -1.04,
        0.436,
        0.21,
        -15.5,
        10.8,
        -8.4
      ],
      [
        2,
        2,
        -1.003,
        -0.503,
        0.981,
        -0.63,
        -94.4,
        194.5,
        79.0
      ],
      [
        2,
        2,
        -0.95,
        -0.355,
        0.894,
        -0.333,
        10.1,
        205.4,
        51.5
      ],
      [
        2,
        4,
        -0.037,
        -0.196,
        0.682,
        0.312,
        35.5,
        -78.6,
        179.7
      ],
      [
        2,
        3,
        0.08,
        -0.05,
        0.74,
        0.445,
        9.6,
        -21.8,
        8.6
      ],
      [
        2,
        2,
        -0.73,
        -0.224,
        0.775,
        0.398,
        61.8,
        93.7,
        -16.4
      ],
      [
        2,
        2,
        -0.089,
        -0.033,
        0.716,
        0.282,
        6.2,
        59.7,
        -49.5
      ],
      [
        2,
        2,
        -0.493,
        -0.695,
        0.98,
        -0.839,
        0.2,
        151.5,
        26.3
      ],
      [
        2,
        2,
        -0.994,
        -0.412,
        0.999,
        -0.681,
        -94.4,
        189.5,
        54.9
      ],
      [
        2,
        5,
        0.27,
        0.956,
        0.822,
        0.949,
        125.5,
        5.3,
        -203.4
      ],
      [
        2,
        4,
        0.024,
        -0.642,
        0.364,
        0.17,
        57.8,
        -17.1,
        103.9
      ],
      [
        2,
        3,
        0.104,
        0.014,
        0.725,
        0.333,
        -2.2,
        -46.2,
        17.0
      ],
      [
        2,
        4,
        -0.332,
        -0.943,
        0.839,
        -0.564,
        -91.5,
        21.3,
        95.3
      ],
      [
        2,
        0,
        0.201,
        0.258,
        0.684,
        0.279,
        61.0,
        54.9,
        -49.5
      ],
      [
        2,
        0,
        0.258,
        1.04,
        0.803,
        0.846,
        246.7,
        58.2,
        -190.0
      ],
      [
        2,
        4,
        0.095,
        -0.061,
        0.703,
        0.36,
        41.3,
        -48.3,
        110.8
      ],
      [
        2,
        5,
        0.215,
        0.51,
        0.828,
        0.953,
        176.4,
        98.8,
        -217.5
      ],
      [
        2,
        4,
        -0.014,
        -0.01,
        0.614,
        0.262,
        8.5,
        -2.2,
        83.4
      ],
      [
        2,
        0,
        -0.842,
        -0.216,
        0.794,
        0.453,
        134.2,
        79.8,
        116.7
      ],
      [
        2,
        2,
        -0.911,
        -0.379,
        1.0,
        -0.698,
        -96.3,
        217.0,
        97.0
      ],
      [
        2,
        3,
        0.151,
        -0.099,
        0.642,
        0.314,
        -58.3,
        -199.5,
        -2.4
      ],
      [
        2,
        1,
        -0.407,
        -0.863,
        -1.04,
        -0.162,
        -272.8,
        -170.3,
        -140.3
      ],
      [
        2,
        1,
        -0.696,
        -0.702,
        0.973,
        -1.04,
        -225.8,
        81.4,
        36.9
      ],
      [
        2,
        4,
        0.067,
        -0.025,
        0.658,
        0.253,
        -3.4,
        -4.8,
        79.3
      ],
      [
        2,
        4,
        -0.269,
        -0.142,
        0.864,
        0.127,
        14.3,
        144.8,
        211.9
      ],
      [
        2,
        4,
        -0.357,
        -0.209,
        0.771,
        0.092,
        8.3,
        113.7,
        166.8
      ],
      [
        2,
        2,
        -1.04,
        -0.468,
        0.963,
        -0.596,
        -138.3,
        218.8,
        42.9
      ],
      [
        2,
        4,
        -0.777,
        -0.27,
        0.845,
        -0.026,
        43.7,
        158.3,
        160.7
      ],
      [
        2,
        4,
        -0.011,
        -0.012,
        0.762,
        0.471,
        37.0,
        -15.8,
        196.5
      ],
      [
        2,
        0,
        0.25,
        0.998,
        0.749,
        0.719,
        161.1,
        0.2,
        -24.8
      ],
      [
        2,
        4,
        -0.143,
        -0.802,
        0.366,
        0.152,
        -29.9,
        -65.9,
        93.2
      ],
      [
        2,
        2,
        -1.033,
        -0.412,
        1.009,
        -0.717,
        -58.6,
        216.7,
        17.9
      ],
      [
        2,
        2,
        -0.033,
        -0.571,
        0.557,
        0.064,
        21.8,
        25.0,
        22.9
      ],
      [
        2,
        1,
        -0.405,
        -0.723,
        -1.04,
        -0.169,
        -294.4,
        -26.3,
        -211.0
      ],
      [
        2,
        2,
        -0.778,
        -0.378,
        0.748,
        0.227,
        2.5,
        98.8,
        -7.1
      ],
      [
        2,
        2,
        -0.614,
        -0.172,
        0.865,
        0.371,
        140.0,
        200.8,
        169.2
      ],
      [
        2,
        4,
        0.063,
        -0.014,
        0.695,
        0.303,
        2.7,
        -0.1,
        62.2
      ],
      [
        2,
        4,
        -0.263,
        -0.958,
        0.469,
        0.271,
        16.5,
        -8.6,
        39.0
      ],
      [
        2,
        1,
        -0.484,
        -0.754,
        -1.04,
        -0.169,
        -269.6,
        -105.3,
        -155.6
      ],
      [
        2,
        0,
        0.052,
        -0.008,
        0.683,
        0.293,
        15.4,
        9.2,
        15.0
      ],
      [
        2,
        2,
        -0.883,
        -0.257,
        0.883,
        0.344,
        149.2,
        211.0,
        73.7
      ],
      [
        2,
        1,
        -0.261,
        -0.907,
        0.961,
        -1.024,
        -211.1,
        73.4,
        79.7
      ],
      [
        2,
        0,
        0.687,
        -0.726,
        0.683,
        0.254,
        18.1,
        -16.2,
        1.7
      ],
      [
        2,
        1,
        -0.426,
        -0.837,
        -1.04,
        -0.164,
        -276.0,
        -127.4,
        -112.6
      ],
      [
        2,
        5,
        -0.208,
        -0.956,
        0.219,
        0.172,
        -39.4,
        -2.2,
        -120.9
      ],
      [
        2,
        2,
        -1.04,
        -0.472,
        1.009,
        -0.708,
        -111.9,
        207.3,
        51.2
      ],
      [
        2,
        0,
        0.234,
        0.145,
        0.68,
        0.35,
        23.7,
        -0.3,
        -3.9
      ],
      [
        2,
        5,
        0.312,
        0.218,
        0.668,
        0.276,
        -1.2,
        -3.0,
        -115.1
      ],
      [
        2,
        0,
        0.238,
        1.04,
        0.742,
        0.702,
        162.2,
        -9.3,
        10.4
      ],
      [
        2,
        2,
        0.267,
        0.553,
        0.751,
        -0.012,
        -44.3,
        80.9,
        -23.1
      ],
      [
        2,
        4,
        -0.023,
        -0.067,
        0.755,
        0.207,
        53.1,
        15.2,
        211.7
      ],
      [
        2,
        4,
        -0.353,
        -1.0,
        0.722,
        -0.351,
        -55.1,
        56.7,
        83.2
      ],
      [
        2,
        4,
        0.035,
        -0.001,
        0.744,
        0.262,
        -0.5,
        -12.6,
        37.5
      ],
      [
        2,
        2,
        -0.509,
        -0.686,
        0.93,
        -0.514,
        -106.0,
        171.7,
        -8.6
      ],
      [
        2,
        2,
        0.277,
        0.181,
        0.678,
        0.126,
        -6.0,
        109.9,
        -60.4
      ],
      [
        2,
        4,
        0.009,
        -0.112,
        0.724,
        0.295,
        -17.2,
        -24.3,
        202.9
      ],
      [
        2,
        0,
        0.222,
        0.789,
        0.794,
        0.878,
        212.4,
        31.7,
        -122.9
      ],
      [
        2,
        5,
        0.172,
        0.465,
        0.741,
        0.361,
        45.5,
        16.5,
        -65.9
      ],
      [
        2,
        4,
        0.072,
        -0.044,
        0.678,
        0.276,
        10.1,
        -32.9,
        71.3
      ],
      [
        2,
        4,
        -0.515,
        -0.62,
        0.352,
        0.123,
        -32.1,
        -50.0,
        51.6
      ],
      [
        2,
        1,
        -0.576,
        -0.749,
        0.95,
        -1.026,
        -182.0,
        49.2,
        10.6
      ],
      [
        2,
        0,
        0.047,
        0.175,
        0.718,
        0.287,
        47.4,
        20.8,
        34.1
      ],
      [
        2,
        0,
        0.146,
        0.83,
        0.668,
        0.828,
        217.2,
        -123.0,
        22.2
      ],
      [
        2,
        4,
        -0.055,
        0.008,
        0.731,
        0.412,
        94.5,
        -10.9,
        226.2
      ],
      [
        2,
        3,
        0.07,
        -0.015,
        0.693,
        0.293,
        7.1,
        -35.6,
        23.5
      ],
      [
        2,
        4,
        0.06,
        -0.047,
        0.705,
        0.284,
        1.1,
        -38.1,
        152.5
      ],
      [
        2,
        2,
        -1.013,
        -0.418,
        0.97,
        -0.675,
        -75.8,
        206.8,
        75.6
      ],
      [
        2,
        0,
        0.236,
        1.04,
        0.747,
        0.699,
        164.1,
        -17.1,
        -35.5
      ],
      [
        2,
        0,
        0.097,
        0.717,
        0.806,
        0.678,
        192.1,
        33.4,
        130.8
      ],
      [
        2,
        2,
        -1.04,
        -0.463,
        1.008,
        -0.712,
        -96.1,
        225.3,
        63.1
      ],
      [
        2,
        3,
        0.127,
        -0.067,
        0.692,
        0.326,
        -24.6,
        -153.8,
        66.4
      ],
      [
        2,
        1,
        -0.649,
        -0.727,
        0.895,
        -0.807,
        -166.1,
        59.2,
        8.0
      ],
      [
        2,
        4,
        0.169,
        -0.183,
        0.485,
        0.198,
        31.8,
        -0.0,
        78.7
      ],
      [
        2,
        4,
        0.065,
        0.206,
        0.703,
        0.397,
        68.3,
        -28.5,
        77.4
      ],
      [
        2,
        4,
        0.056,
        -0.316,
        0.723,
        0.237,
        -22.7,
        -14.2,
        170.6
      ],
      [
        2,
        0,
        0.236,
        0.866,
        0.838,
        1.02,
        273.6,
        100.1,
        -182.4
      ],
      [
        2,
        3,
        0.121,
        -0.065,
        0.701,
        0.332,
        13.8,
        -167.5,
        102.4
      ],
      [
        2,
        0,
        0.25,
        1.04,
        0.795,
        0.919,
        267.9,
        -30.2,
        -170.1
      ],
      [
        2,
        3,
        0.171,
        -0.118,
        0.677,
        0.316,
        -83.4,
        -190.1,
        82.6
      ],
      [
        2,
        2,
        -0.995,
        -0.444,
        0.942,
        -0.545,
        -105.4,
        212.5,
        37.7
      ],
      [
        2,
        2,
        -0.885,
        -0.264,
        0.858,
        0.311,
        158.8,
        261.8,
        128.1
      ],
      [
        2,
        5,
        0.203,
        0.501,
        0.696,
        0.379,
        86.8,
        65.4,
        -119.5
      ],
      [
        2,
        2,
        -0.309,
        -0.14,
        0.708,
        0.287,
        -7.8,
        115.1,
        -76.1
      ],
      [
        2,
        2,
        -0.307,
        -0.805,
        0.89,
        -0.647,
        -84.8,
        102.6,
        87.4
      ],
      [
        2,
        1,
        -0.41,
        -0.773,
        -1.04,
        -0.16,
        -250.2,
        -41.7,
        -188.3
      ],
      [
        2,
        5,
        -0.087,
        -0.111,
        0.729,
        0.28,
        -12.0,
        143.0,
        -209.8
      ],
      [
        2,
        4,
        -0.226,
        -0.196,
        0.711,
        0.247,
        -17.4,
        30.2,
        183.1
      ],
      [
        2,
        4,
        -0.602,
        -0.211,
        0.822,
        0.152,
        52.5,
        143.0,
        182.2
      ],
      [
        2,
        0,
        0.134,
        0.858,
        0.797,
        0.768,
        271.7,
        -78.2,
        -22.7
      ],
      [
        2,
        4,
        -0.424,
        -0.93,
        -0.149,
        0.039,
        -72.6,
        -49.2,
        96.1
      ],
      [
        2,
        4,
        -0.029,
        0.028,
        0.656,
        0.333,
        15.4,
        -6.4,
        36.6
      ],
      [
        2,
        2,
        -0.874,
        -0.45,
        1.004,
        -0.705,
        -120.8,
        212.3,
        54.2
      ],
      [
        2,
        1,
        -0.303,
        -1.04,
        0.393,
        0.213,
        -16.5,
        -14.1,
        -0.8
      ],
      [
        2,
        4,
        -0.779,
        -0.204,
        0.855,
        0.411,
        113.4,
        169.1,
        200.3
      ],
      [
        2,
        0,
        -0.021,
        0.005,
        0.714,
        0.304,
        36.9,
        34.4,
        -29.5
      ],
      [
        2,
        2,
        -0.856,
        -0.249,
        0.875,
        0.309,
        124.2,
        202.3,
        127.6
      ],
      [
        2,
        4,
        -0.649,
        -0.239,
        0.825,
        0.182,
        51.7,
        168.1,
        177.6
      ],
      [
        2,
        2,
        -0.789,
        -0.234,
        0.876,
        0.236,
        121.0,
        208.6,
        159.7
      ],
      [
        2,
        1,
        -0.54,
        -0.78,
        0.968,
        -1.04,
        -217.6,
        82.7,
        14.7
      ],
      [
        2,
        4,
        0.127,
        -0.082,
        0.721,
        0.307,
        -10.5,
        -93.6,
        164.9
      ],
      [
        2,
        4,
        -0.637,
        -0.208,
        0.777,
        0.256,
        77.0,
        159.6,
        179.4
      ],
      [
        2,
        2,
        0.247,
        1.04,
        0.798,
        -0.208,
        -38.8,
        207.5,
        20.4
      ],
      [
        2,
        4,
        0.056,
        -0.091,
        0.732,
        0.081,
        -48.4,
        0.2,
        196.4
      ],
      [
        2,
        4,
        -0.468,
        -0.368,
        0.637,
        0.192,
        -7.9,
        -16.6,
        49.3
      ],
      [
        2,
        4,
        -0.007,
        -0.062,
        0.671,
        0.238,
        51.5,
        -24.4,
        208.3
      ],
      [
        2,
        4,
        -0.152,
        0.129,
        0.669,
        0.242,
        -8.1,
        -4.7,
        24.6
      ],
      [
        2,
        0,
        0.057,
        0.688,
        0.803,
        0.617,
        269.5,
        74.3,
        56.3
      ],
      [
        2,
        1,
        -0.316,
        -1.04,
        0.396,
        0.203,
        -38.6,
        13.5,
        -2.0
      ],
      [
        2,
        0,
        0.255,
        0.96,
        0.822,
        1.024,
        254.6,
        -15.2,
        -206.7
      ],
      [
        2,
        2,
        -0.877,
        -0.267,
        0.87,
        0.317,
        141.5,
        216.9,
        98.3
      ],
      [
        2,
        0,
        0.037,
        0.671,
        0.667,
        0.518,
        90.7,
        25.5,
        4.2
      ],
      [
        2,
        5,
        0.074,
        0.297,
        0.749,
        0.449,
        66.6,
        22.0,
        -80.4
      ],
      [
        2,
        1,
        -0.644,
        -0.766,
        0.88,
        -0.915,
        -237.3,
        65.5,
        59.8
      ],
      [
        2,
        0,
        0.249,
        0.943,
        0.848,
        1.04,
        228.7,
        69.8,
        -175.4
      ],
      [
        2,
        5,
        -0.371,
        -0.559,
        0.379,
        0.197,
        -71.9,
        88.8,
        -144.1
      ],
      [
        2,
        0,
        0.031,
        0.058,
        0.697,
        0.531,
        76.3,
        -0.6,
        50.5
      ],
      [
        2,
        2,
        -0.278,
        -0.13,
        0.552,
        0.064,
        -35.7,
        46.4,
        23.2
      ],
      [
        2,
        1,
        0.106,
        0.476,
        0.704,
        0.372,
        -30.4,
        -5.1,
        -22.8
      ],
      [
        2,
        2,
        -0.746,
        -0.228,
        0.856,
        0.054,
        51.6,
        162.2,
        160.7
      ],
      [
        2,
        0,
        0.052,
        0.694,
        0.777,
        0.619,
        243.5,
        41.5,
        35.7
      ],
      [
        2,
        1,
        -0.575,
        -0.795,
        0.961,
        -1.04,
        -227.1,
        63.3,
        50.6
      ],
      [
        2,
        0,
        0.255,
        1.04,
        0.789,
        0.889,
        239.9,
        -142.3,
        -185.9
      ],
      [
        2,
        0,
        0.236,
        0.826,
        0.816,
        0.866,
        278.6,
        164.6,
        -137.7
      ],
      [
        2,
        2,
        -0.964,
        -0.354,
        1.011,
        -0.682,
        -113.2,
        198.7,
        54.1
      ],
      [
        2,
        4,
        0.124,
        -0.183,
        0.674,
        0.233,
        -4.7,
        32.8,
        122.2
      ],
      [
        2,
        2,
        0.28,
        0.979,
        0.712,
        -0.059,
        23.8,
        199.2,
        -40.9
      ],
      [
        2,
        4,
        0.105,
        0.008,
        0.67,
        0.138,
        -13.6,
        -15.5,
        113.1
      ],
      [
        2,
        4,
        0.06,
        -0.018,
        0.7,
        0.137,
        -25.5,
        24.9,
        206.0
      ],
      [
        2,
        5,
        0.462,
        0.227,
        0.637,
        0.158,
        -18.5,
        70.8,
        -104.8
      ],
      [
        2,
        2,
        -1.028,
        -0.454,
        0.999,
        -0.673,
        -87.5,
        236.0,
        53.2
      ],
      [
        2,
        4,
        0.05,
        0.21,
        0.801,
        -0.212,
        -51.7,
        53.1,
        138.7
      ],
      [
        2,
        2,
        -0.226,
        0.023,
        0.729,
        0.255,
        14.1,
        82.0,
        -35.4
      ],
      [
        2,
        1,
        -0.221,
        -1.005,
        -1.04,
        -0.159,
        -248.1,
        -98.1,
        -127.2
      ],
      [
        2,
        1,
        -0.562,
        -0.733,
        0.995,
        -1.04,
        -241.0,
        81.9,
        51.4
      ],
      [
        2,
        0,
        0.4,
        -0.615,
        0.62,
        0.23,
        47.9,
        -28.4,
        38.7
      ],
      [
        2,
        4,
        -0.011,
        0.039,
        0.71,
        0.31,
        60.7,
        -43.6,
        156.1
      ],
      [
        2,
        0,
        -0.784,
        -0.222,
        0.774,
        0.241,
        150.4,
        128.5,
        98.5
      ],
      [
        2,
        3,
        0.112,
        -0.134,
        0.684,
        0.305,
        9.4,
        -87.6,
        82.6
      ],
      [
        3,
        0,
        0.555,
        -0.66,
        0.753,
        0.272,
        114.0,
        98.3,
        -58.0
      ],
      [
        3,
        5,
        0.499,
        -0.403,
        0.724,
        0.08,
        -73.3,
        167.5,
        -171.6
      ],
      [
        3,
        4,
        -0.2,
        -0.06,
        0.749,
        0.428,
        10.3,
        -85.4,
        193.4
      ],
      [
        3,
        0,
        -0.249,
        -1.04,
        0.72,
        0.237,
        113.0,
        5.1,
        -0.4
      ],
      [
        3,
        3,
        -0.081,
        -0.024,
        0.649,
        0.339,
        6.8,
        -160.8,
        16.4
      ],
      [
        3,
        0,
        0.239,
        -0.753,
        0.799,
        0.908,
        212.3,
        31.7,
        -122.8
      ],
      [
        3,
        1,
        0.154,
        0.726,
        0.41,
        0.204,
        -34.7,
        29.2,
        -1.7
      ],
      [
        3,
        5,
        0.131,
        -0.16,
        0.338,
        0.305,
        8.6,
        -3.9,
        -37.2
      ],
      [
        3,
        0,
        0.413,
        -0.836,
        0.769,
        0.557,
        234.3,
        12.3,
        118.5
      ],
      [
        3,
        4,
        -0.146,
        -0.005,
        0.653,
        0.264,
        -32.2,
        -53.1,
        129.8
      ],
      [
        3,
        2,
        0.727,
        -0.791,
        1.031,
        -0.725,
        -139.3,
        183.7,
        28.2
      ],
      [
        3,
        4,
        0.184,
        -0.354,
        0.87,
        0.305,
        177.6,
        176.4,
        213.5
      ],
      [
        3,
        0,
        -0.145,
        -0.836,
        0.707,
        0.63,
        172.3,
        -52.9,
        70.2
      ],
      [
        3,
        2,
        0.691,
        -0.796,
        0.959,
        -0.546,
        -62.7,
        211.2,
        31.0
      ],
      [
        3,
        0,
        0.546,
        -0.845,
        0.771,
        0.351,
        178.1,
        62.6,
        30.9
      ],
      [
        3,
        4,
        -0.113,
        -0.043,
        0.716,
        0.309,
        5.1,
        -4.9,
        105.4
      ],
      [
        3,
        1,
        0.563,
        -0.452,
        0.543,
        0.157,
        -74.5,
        -9.4,
        31.5
      ],
      [
        3,
        5,
        -0.032,
        -0.047,
        0.702,
        0.243,
        -13.3,
        4.5,
        -25.0
      ],
      [
        3,
        2,
        0.397,
        -0.165,
        0.968,
        -0.687,
        -91.7,
        198.5,
        55.6
      ],
      [
        3,
        0,
        -0.153,
        -0.074,
        0.722,
        0.103,
        126.9,
        61.6,
        118.9
      ],
      [
        3,
        5,
        0.469,
        -0.579,
        0.603,
        0.163,
        -12.1,
        58.1,
        -112.1
      ],
      [
        3,
        2,
        0.655,
        -0.824,
        0.87,
        0.002,
        55.2,
        198.6,
        67.2
      ],
      [
        3,
        2,
        0.442,
        -0.289,
        0.804,
        -0.31,
        -77.8,
        163.3,
        134.1
      ],
      [
        3,
        0,
        0.092,
        -0.91,
        0.797,
        0.852,
        275.6,
        135.7,
        -149.0
      ],
      [
        3,
        2,
        -0.089,
        0.043,
        0.724,
        0.203,
        -50.1,
        76.5,
        -73.2
      ],
      [
        3,
        2,
        0.691,
        -0.777,
        0.874,
        -0.162,
        -55.8,
        220.3,
        42.5
      ],
      [
        3,
        3,
        -0.041,
        -0.111,
        0.726,
        0.418,
        9.6,
        -61.2,
        36.5
      ],
      [
        3,
        2,
        -0.239,
        -0.219,
        0.902,
        -0.516,
        41.0,
        194.0,
        72.1
      ],
      [
        3,
        4,
        -0.089,
        0.041,
        0.768,
        0.397,
        34.6,
        -51.3,
        236.5
      ],
      [
        3,
        4,
        0.274,
        -0.53,
        0.84,
        0.172,
        35.1,
        165.0,
        182.8
      ],
      [
        3,
        0,
        0.444,
        -0.846,
        0.786,
        0.496,
        272.5,
        101.4,
        124.9
      ],
      [
        3,
        2,
        0.583,
        -0.715,
        0.756,
        0.293,
        65.7,
        78.2,
        -42.3
      ],
      [
        3,
        2,
        0.714,
        -0.771,
        1.004,
        -0.697,
        -96.1,
        225.3,
        63.2
      ],
      [
        3,
        0,
        -0.067,
        -0.848,
        0.752,
        0.56,
        217.4,
        -16.9,
        150.7
      ],
      [
        3,
        1,
        0.276,
        -0.72,
        0.703,
        0.358,
        -30.4,
        -5.1,
        -22.7
      ],
      [
        3,
        4,
        -0.052,
        -0.715,
        0.741,
        0.342,
        15.5,
        47.5,
        86.8
      ],
      [
        3,
        4,
        -0.166,
        -0.027,
        0.722,
        0.307,
        -10.4,
        -93.8,
        165.3
      ],
      [
        3,
        5,
        -0.108,
        -0.981,
        0.776,
        0.907,
        196.8,
        -22.4,
        -225.7
      ],
      [
        3,
        4,
        -0.055,
        0.281,
        0.373,
        0.141,
        36.4,
        -19.8,
        76.3
      ],
      [
        3,
        2,
        -0.079,
        -0.019,
        0.801,
        -0.175,
        29.3,
        179.0,
        28.8
      ],
      [
        3,
        2,
        0.446,
        -0.334,
        0.96,
        -0.662,
        -87.8,
        190.7,
        87.7
      ],
      [
        3,
        5,
        0.425,
        -0.54,
        0.728,
        0.453,
        100.5,
        54.8,
        -145.4
      ],
      [
        3,
        5,
        0.403,
        -0.518,
        0.827,
        0.957,
        176.4,
        98.8,
        -217.5
      ],
      [
        3,
        1,
        0.23,
        0.497,
        -0.588,
        -0.048,
        -207.7,
        -132.3,
        6.5
      ],
      [
        3,
        1,
        0.437,
        -0.087,
        0.892,
        -0.941,
        -237.3,
        65.5,
        59.7
      ],
      [
        3,
        4,
        0.021,
        -0.039,
        0.74,
        0.228,
        15.7,
        17.2,
        62.3
      ],
      [
        3,
        4,
        -0.253,
        -0.351,
        0.717,
        0.123,
        -35.6,
        0.9,
        115.0
      ],
      [
        3,
        4,
        -0.107,
        0.036,
        0.716,
        0.217,
        -42.1,
        -52.6,
        133.4
      ],
      [
        3,
        4,
        0.709,
        -0.801,
        0.765,
        0.235,
        53.4,
        35.7,
        190.5
      ],
      [
        3,
        2,
        0.649,
        -0.709,
        0.984,
        -0.827,
        -16.4,
        160.6,
        157.8
      ],
      [
        3,
        1,
        -0.26,
        -0.651,
        0.546,
        0.047,
        -50.6,
        27.0,
        -32.9
      ],
      [
        3,
        4,
        0.03,
        0.179,
        0.375,
        0.141,
        -46.2,
        -30.8,
        68.8
      ],
      [
        3,
        0,
        -0.145,
        -1.02,
        0.831,
        0.954,
        293.2,
        53.2,
        -141.1
      ],
      [
        3,
        4,
        -0.026,
        0.047,
        0.718,
        0.268,
        -26.6,
        -35.0,
        63.6
      ],
      [
        3,
        1,
        0.435,
        -0.107,
        0.986,
        -1.04,
        -212.4,
        100.7,
        41.2
      ],
      [
        3,
        5,
        0.022,
        -0.077,
        0.69,
        0.327,
        22.0,
        -0.5,
        -48.7
      ],
      [
        3,
        0,
        -0.096,
        -1.008,
        0.754,
        0.715,
        170.0,
        24.6,
        -2.1
      ],
      [
        3,
        2,
        0.657,
        -0.658,
        0.972,
        -0.666,
        -121.5,
        201.2,
        57.1
      ],
      [
        3,
        1,
        0.115,
        0.674,
        0.428,
        0.182,
        -38.5,
        6.1,
        -26.9
      ],
      [
        3,
        5,
        0.462,
        -0.309,
        -0.778,
        -0.095,
        -155.4,
        53.9,
        -194.3
      ],
      [
        3,
        0,
        0.018,
        -0.106,
        0.681,
        0.306,
        52.2,
        5.2,
        6.4
      ],
      [
        3,
        5,
        0.295,
        -0.223,
        0.69,
        0.294,
        -11.0,
        -20.6,
        -71.3
      ],
      [
        3,
        4,
        -0.079,
        0.062,
        0.777,
        -0.028,
        -54.4,
        18.9,
        181.0
      ],
      [
        3,
        5,
        0.506,
        -0.39,
        0.65,
        0.153,
        -80.1,
        159.7,
        -185.6
      ],
      [
        3,
        0,
        0.523,
        -0.775,
        0.758,
        0.262,
        149.4,
        59.7,
        51.9
      ],
      [
        3,
        2,
        0.475,
        -0.337,
        0.976,
        -0.832,
        0.0,
        151.4,
        26.2
      ],
      [
        3,
        3,
        -0.042,
        0.089,
        0.657,
        0.328,
        -23.1,
        -59.7,
        36.2
      ],
      [
        3,
        0,
        -0.024,
        -0.162,
        0.715,
        0.293,
        47.4,
        20.9,
        34.1
      ],
      [
        3,
        4,
        0.615,
        -0.848,
        0.596,
        0.273,
        23.6,
        -15.3,
        105.9
      ],
      [
        3,
        0,
        0.56,
        -0.751,
        0.771,
        0.288,
        92.8,
        85.1,
        73.8
      ],
      [
        3,
        0,
        0.18,
        -0.819,
        0.839,
        1.026,
        273.5,
        100.1,
        -182.4
      ],
      [
        3,
        1,
        0.044,
        0.498,
        0.872,
        -0.62,
        -98.8,
        49.9,
        72.2
      ],
      [
        3,
        2,
        0.702,
        -0.813,
        0.901,
        -0.305,
        10.1,
        205.4,
        52.1
      ],
      [
        3,
        4,
        -0.225,
        -0.149,
        0.69,
        0.204,
        34.9,
        32.4,
        60.7
      ],
      [
        3,
        1,
        0.377,
        0.164,
        -1.04,
        -0.165,
        -272.8,
        -170.2,
        -140.3
      ],
      [
        3,
        4,
        -0.008,
        -0.013,
        0.734,
        0.177,
        5.8,
        13.0,
        133.6
      ],
      [
        3,
        3,
        0.458,
        -0.305,
        0.679,
        0.194,
        -43.5,
        -132.1,
        -30.4
      ],
      [
        3,
        1,
        0.458,
        -0.261,
        -1.04,
        -0.169,
        -294.3,
        -26.3,
        -210.9
      ],
      [
        3,
        2,
        0.607,
        -0.823,
        0.878,
        0.328,
        148.2,
        214.5,
        153.7
      ],
      [
        3,
        0,
        0.017,
        -0.867,
        0.809,
        1.005,
        225.8,
        4.7,
        -171.1
      ],
      [
        3,
        4,
        0.393,
        -0.177,
        0.705,
        -0.212,
        -27.2,
        86.1,
        158.7
      ],
      [
        3,
        3,
        -0.199,
        -0.071,
        0.692,
        0.333,
        -9.9,
        -149.2,
        78.6
      ],
      [
        3,
        2,
        0.415,
        -0.629,
        0.853,
        0.054,
        6.5,
        178.4,
        139.1
      ],
      [
        3,
        5,
        0.431,
        -0.515,
        0.669,
        0.126,
        -7.5,
        84.6,
        -117.8
      ],
      [
        3,
        3,
        -0.17,
        -0.039,
        0.678,
        0.298,
        -24.6,
        -153.8,
        66.6
      ],
      [
        3,
        0,
        0.343,
        -0.734,
        0.764,
        0.207,
        143.3,
        26.5,
        115.5
      ],
      [
        3,
        0,
        -0.031,
        -0.888,
        0.77,
        0.8,
        128.8,
        -118.9,
        91.3
      ],
      [
        3,
        2,
        0.689,
        -0.778,
        0.963,
        -0.591,
        -80.1,
        217.3,
        55.5
      ],
      [
        3,
        2,
        0.723,
        -0.779,
        1.012,
        -0.729,
        -110.0,
        194.4,
        10.7
      ],
      [
        3,
        2,
        0.626,
        -0.683,
        0.973,
        -0.781,
        -16.4,
        153.6,
        123.0
      ],
      [
        3,
        0,
        -0.305,
        -0.396,
        0.755,
        0.737,
        150.4,
        -38.2,
        -17.7
      ],
      [
        3,
        4,
        -0.073,
        -0.076,
        0.744,
        0.293,
        14.2,
        -12.4,
        126.5
      ],
      [
        3,
        1,
        0.028,
        0.459,
        0.884,
        -0.66,
        -64.5,
        41.1,
        53.7
      ],
      [
        3,
        4,
        -0.06,
        0.011,
        0.668,
        0.239,
        51.5,
        -24.4,
        208.3
      ],
      [
        3,
        0,
        0.297,
        -0.873,
        0.75,
        0.717,
        129.1,
        6.5,
        9.4
      ],
      [
        3,
        2,
        0.709,
        -0.811,
        0.998,
        -0.703,
        -106.6,
        236.6,
        62.0
      ],
      [
        3,
        2,
        0.731,
        -0.804,
        0.987,
        -0.626,
        -87.5,
        236.1,
        53.5
      ],
      [
        3,
        3,
        -0.115,
        -0.016,
        0.718,
        0.298,
        16.7,
        -35.2,
        -18.3
      ],
      [
        3,
        4,
        -0.132,
        -0.072,
        0.7,
        0.278,
        3.0,
        -25.4,
        95.0
      ],
      [
        3,
        1,
        0.483,
        -0.296,
        0.204,
        0.082,
        -102.6,
        -25.6,
        64.0
      ],
      [
        3,
        0,
        0.182,
        -0.752,
        0.754,
        0.739,
        137.7,
        8.0,
        -10.1
      ],
      [
        3,
        4,
        0.506,
        -0.823,
        0.718,
        0.248,
        5.4,
        41.7,
        54.9
      ],
      [
        3,
        4,
        -0.003,
        -0.149,
        0.865,
        0.123,
        14.3,
        144.8,
        211.8
      ],
      [
        3,
        5,
        0.114,
        -0.232,
        0.712,
        0.286,
        -4.4,
        34.1,
        -34.8
      ],
      [
        3,
        4,
        0.298,
        -0.271,
        0.71,
        0.144,
        15.2,
        14.2,
        48.5
      ],
      [
        3,
        2,
        0.666,
        -0.764,
        0.829,
        -0.191,
        -84.5,
        191.7,
        54.2
      ],
      [
        3,
        5,
        -0.164,
        -0.272,
        0.64,
        0.549,
        110.3,
        -63.5,
        -153.0
      ],
      [
        3,
        5,
        0.322,
        -0.596,
        0.78,
        0.788,
        109.2,
        -12.0,
        -170.1
      ],
      [
        3,
        1,
        0.088,
        0.66,
        0.382,
        0.2,
        -33.4,
        -6.6,
        -13.6
      ],
      [
        3,
        0,
        0.243,
        -0.679,
        0.613,
        0.143,
        110.1,
        78.4,
        -90.0
      ],
      [
        3,
        0,
        -0.361,
        -0.647,
        0.749,
        0.703,
        189.5,
        -31.2,
        16.9
      ],
      [
        3,
        0,
        -0.155,
        -0.908,
        0.765,
        0.546,
        164.8,
        33.3,
        59.5
      ],
      [
        3,
        4,
        -0.129,
        -0.009,
        0.745,
        0.435,
        62.4,
        -28.2,
        178.9
      ],
      [
        3,
        0,
        0.627,
        0.034,
        0.681,
        0.234,
        18.4,
        0.7,
        -5.1
      ],
      [
        3,
        2,
        0.417,
        -0.517,
        0.785,
        0.198,
        42.9,
        113.2,
        5.3
      ],
      [
        3,
        3,
        -0.027,
        -0.065,
        0.704,
        0.324,
        4.1,
        -41.5,
        -19.4
      ],
      [
        3,
        2,
        0.698,
        -0.805,
        0.97,
        -0.628,
        -91.1,
        229.6,
        29.4
      ],
      [
        3,
        4,
        -0.065,
        0.021,
        0.711,
        0.242,
        38.6,
        -26.7,
        150.2
      ],
      [
        3,
        4,
        0.363,
        -0.625,
        0.89,
        0.364,
        151.7,
        185.0,
        215.3
      ],
      [
        3,
        2,
        0.462,
        -0.773,
        0.878,
        0.324,
        146.9,
        206.4,
        115.5
      ],
      [
        3,
        0,
        0.05,
        -0.94,
        0.668,
        0.828,
        217.2,
        -122.9,
        22.2
      ],
      [
        3,
        5,
        0.424,
        -0.241,
        -0.724,
        -0.047,
        -134.2,
        -21.1,
        -175.5
      ],
      [
        3,
        0,
        0.595,
        -0.779,
        0.772,
        0.274,
        100.6,
        75.3,
        -28.2
      ],
      [
        3,
        4,
        0.115,
        0.503,
        0.329,
        0.128,
        -44.5,
        -49.2,
        66.7
      ],
      [
        3,
        4,
        0.233,
        0.24,
        0.422,
        0.129,
        -0.1,
        -1.4,
        67.2
      ],
      [
        3,
        2,
        0.603,
        -0.807,
        0.775,
        0.398,
        61.7,
        93.7,
        -16.4
      ],
      [
        3,
        2,
        0.71,
        -0.811,
        0.972,
        -0.675,
        -75.9,
        206.9,
        76.2
      ],
      [
        3,
        1,
        0.482,
        -0.371,
        -1.04,
        -0.17,
        -300.4,
        -47.2,
        -221.8
      ],
      [
        3,
        2,
        0.529,
        -0.449,
        0.981,
        -0.826,
        -14.0,
        164.3,
        27.9
      ],
      [
        3,
        4,
        0.655,
        -0.78,
        0.7,
        0.286,
        -4.1,
        -20.9,
        89.7
      ],
      [
        3,
        5,
        0.49,
        -0.366,
        0.734,
        0.28,
        -12.1,
        142.0,
        -208.8
      ],
      [
        3,
        2,
        -0.469,
        -0.686,
        0.853,
        -0.291,
        23.9,
        200.8,
        31.4
      ],
      [
        3,
        4,
        0.128,
        -0.276,
        0.72,
        0.093,
        -3.0,
        15.8,
        107.2
      ],
      [
        3,
        2,
        0.541,
        -0.592,
        0.763,
        0.325,
        105.3,
        127.9,
        -11.2
      ],
      [
        3,
        0,
        0.07,
        -0.352,
        0.73,
        0.324,
        43.7,
        17.6,
        -40.4
      ],
      [
        3,
        0,
        -0.026,
        -0.886,
        0.798,
        0.595,
        184.9,
        70.0,
        115.8
      ],
      [
        3,
        2,
        0.652,
        -0.799,
        0.713,
        0.192,
        -6.1,
        112.4,
        5.8
      ],
      [
        3,
        4,
        -0.019,
        -0.186,
        0.714,
        0.237,
        -17.3,
        30.2,
        183.1
      ],
      [
        3,
        4,
        0.491,
        -0.69,
        0.831,
        0.115,
        29.8,
        165.7,
        202.3
      ],
      [
        3,
        1,
        0.199,
        0.489,
        0.961,
        -1.028,
        -211.2,
        73.4,
        79.6
      ],
      [
        3,
        2,
        -0.429,
        -0.609,
        0.839,
        -0.054,
        88.8,
        153.5,
        57.0
      ],
      [
        3,
        2,
        0.406,
        -0.2,
        0.805,
        -0.467,
        -20.1,
        31.2,
        24.3
      ],
      [
        3,
        0,
        0.059,
        -0.187,
        0.622,
        0.256,
        67.3,
        31.5,
        -21.8
      ],
      [
        3,
        4,
        0.031,
        0.102,
        0.677,
        0.298,
        19.0,
        -44.8,
        147.6
      ],
      [
        3,
        4,
        -0.111,
        -0.059,
        0.713,
        0.227,
        6.4,
        -28.7,
        74.9
      ],
      [
        3,
        0,
        0.536,
        -0.859,
        0.783,
        0.553,
        186.9,
        67.0,
        120.7
      ],
      [
        3,
        2,
        0.356,
        -0.719,
        0.822,
        -0.26,
        -38.9,
        207.6,
        20.4
      ],
      [
        3,
        2,
        0.421,
        -0.65,
        0.857,
        0.375,
        140.1,
        200.1,
        169.4
      ],
      [
        3,
        0,
        0.069,
        -0.894,
        0.798,
        0.853,
        261.8,
        79.9,
        -175.9
      ],
      [
        3,
        0,
        -0.114,
        -0.968,
        0.802,
        0.748,
        179.5,
        -13.8,
        131.2
      ],
      [
        3,
        0,
        0.61,
        -0.738,
        0.77,
        0.255,
        76.5,
        57.4,
        16.2
      ],
      [
        3,
        4,
        0.13,
        0.637,
        -0.168,
        0.025,
        -90.4,
        -54.1,
        91.3
      ],
      [
        3,
        4,
        -0.005,
        0.095,
        0.456,
        0.182,
        22.6,
        -29.9,
        76.1
      ],
      [
        3,
        5,
        0.204,
        0.961,
        0.39,
        0.2,
        -48.5,
        -2.1,
        -73.6
      ],
      [
        3,
        1,
        0.094,
        0.634,
        0.728,
        -0.022,
        -88.3,
        32.8,
        21.7
      ],
      [
        3,
        2,
        0.587,
        -0.689,
        0.784,
        0.293,
        70.1,
        119.0,
        -33.9
      ],
      [
        3,
        5,
        -0.067,
        -0.981,
        0.797,
        0.813,
        183.1,
        49.3,
        -217.4
      ],
      [
        3,
        5,
        -0.135,
        -0.995,
        0.795,
        0.904,
        157.3,
        -50.9,
        -182.4
      ],
      [
        3,
        4,
        -0.22,
        -0.091,
        0.74,
        0.124,
        -12.8,
        43.7,
        142.2
      ],
      [
        3,
        4,
        0.014,
        -0.039,
        0.578,
        0.239,
        30.7,
        -27.4,
        40.8
      ],
      [
        3,
        0,
        -0.145,
        -0.998,
        0.818,
        1.04,
        297.1,
        -45.2,
        -116.3
      ],
      [
        3,
        0,
        0.008,
        -0.09,
        0.719,
        0.325,
        51.7,
        4.1,
        -42.4
      ],
      [
        3,
        5,
        -0.078,
        -0.165,
        0.622,
        0.294,
        -13.5,
        -22.1,
        -35.1
      ],
      [
        3,
        4,
        0.68,
        -0.792,
        0.726,
        0.184,
        -37.5,
        13.3,
        228.2
      ],
      [
        3,
        5,
        -0.189,
        -0.965,
        0.78,
        0.828,
        165.7,
        -62.4,
        -201.5
      ],
      [
        3,
        0,
        0.015,
        -0.869,
        0.744,
        0.489,
        159.7,
        13.3,
        67.8
      ],
      [
        3,
        4,
        -0.003,
        0.003,
        0.721,
        0.26,
        -7.8,
        0.0,
        125.1
      ],
      [
        3,
        4,
        -0.132,
        -0.082,
        0.732,
        0.262,
        4.2,
        -21.8,
        105.1
      ],
      [
        3,
        4,
        0.072,
        0.566,
        0.485,
        0.039,
        -37.9,
        50.3,
        75.5
      ],
      [
        3,
        4,
        -0.182,
        -0.07,
        0.764,
        0.326,
        -4.9,
        -37.6,
        71.7
      ],
      [
        3,
        1,
        0.392,
        0.075,
        0.97,
        -1.04,
        -227.1,
        63.3,
        50.6
      ],
      [
        3,
        2,
        0.704,
        -0.742,
        0.983,
        -0.655,
        -88.7,
        214.6,
        38.6
      ],
      [
        3,
        0,
        0.259,
        -0.898,
        0.787,
        0.675,
        286.5,
        50.6,
        79.1
      ],
      [
        3,
        0,
        -0.156,
        -0.999,
        0.798,
        0.785,
        342.5,
        35.6,
        -5.7
      ],
      [
        3,
        2,
        0.081,
        0.62,
        0.913,
        -0.741,
        -19.0,
        46.6,
        -14.7
      ],
      [
        3,
        2,
        0.507,
        -0.719,
        0.791,
        -0.036,
        25.7,
        153.3,
        20.1
      ],
      [
        3,
        2,
        0.708,
        -0.808,
        0.994,
        -0.706,
        -60.3,
        209.6,
        72.0
      ],
      [
        3,
        4,
        0.023,
        -0.203,
        0.725,
        0.273,
        -7.8,
        9.4,
        113.0
      ],
      [
        3,
        4,
        -0.03,
        0.048,
        0.632,
        -0.021,
        9.9,
        34.8,
        83.7
      ],
      [
        3,
        4,
        0.451,
        -0.825,
        0.881,
        0.324,
        178.4,
        158.1,
        189.4
      ],
      [
        4,
        1,
        -0.169,
        -0.645,
        0.722,
        0.237,
        -19.9,
        9.9,
        -16.8
      ],
      [
        4,
        1,
        -0.326,
        -1.04,
        0.826,
        -0.502,
        -129.3,
        -2.4,
        44.0
      ],
      [
        4,
        0,
        0.241,
        0.215,
        0.721,
        0.361,
        65.0,
        -10.6,
        -45.6
      ],
      [
        4,
        4,
        0.172,
        -0.276,
        0.71,
        0.246,
        -17.4,
        30.2,
        183.1
      ],
      [
        4,
        5,
        -0.245,
        -0.961,
        0.522,
        0.323,
        44.7,
        17.3,
        -73.3
      ],
      [
        4,
        0,
        0.253,
        0.967,
        0.775,
        0.612,
        268.5,
        159.6,
        -128.5
      ],
      [
        4,
        0,
        0.236,
        1.023,
        0.696,
        0.813,
        230.6,
        -94.6,
        -230.4
      ],
      [
        4,
        1,
        -0.207,
        -0.804,
        0.703,
        -0.103,
        -26.5,
        -0.5,
        1.1
      ],
      [
        4,
        0,
        -0.057,
        0.14,
        0.656,
        0.181,
        23.2,
        -6.6,
        17.4
      ],
      [
        4,
        1,
        0.119,
        -0.793,
        0.683,
        0.12,
        -15.8,
        3.0,
        -3.6
      ],
      [
        4,
        2,
        0.33,
        -0.285,
        0.798,
        0.137,
        18.9,
        161.3,
        160.0
      ],
      [
        4,
        0,
        0.257,
        1.0,
        0.806,
        0.986,
        225.7,
        4.7,
        -171.1
      ],
      [
        4,
        1,
        -0.002,
        -0.931,
        0.868,
        -0.625,
        -209.0,
        51.9,
        78.9
      ],
      [
        4,
        1,
        0.096,
        -0.066,
        0.66,
        0.243,
        -31.8,
        14.6,
        10.7
      ],
      [
        4,
        2,
        -0.174,
        -0.751,
        0.683,
        0.088,
        33.9,
        80.2,
        4.2
      ],
      [
        4,
        4,
        0.318,
        -0.251,
        0.845,
        0.134,
        23.2,
        129.3,
        245.0
      ],
      [
        4,
        4,
        -0.022,
        -0.919,
        0.553,
        0.313,
        9.0,
        -8.9,
        13.2
      ],
      [
        4,
        4,
        -0.096,
        -0.196,
        0.708,
        0.247,
        -17.7,
        24.8,
        42.2
      ],
      [
        4,
        5,
        0.262,
        1.04,
        0.779,
        0.847,
        196.6,
        -22.4,
        -225.7
      ],
      [
        4,
        5,
        0.134,
        -0.796,
        -0.019,
        -0.055,
        -142.3,
        72.9,
        -180.2
      ],
      [
        4,
        2,
        0.495,
        -0.448,
        0.882,
        -0.083,
        18.6,
        202.2,
        66.2
      ],
      [
        4,
        4,
        -0.041,
        -0.038,
        0.725,
        0.266,
        -39.3,
        -37.7,
        199.7
      ],
      [
        4,
        4,
        -0.107,
        -0.096,
        0.702,
        0.297,
        -18.2,
        -63.1,
        80.4
      ],
      [
        4,
        4,
        0.157,
        -0.241,
        0.823,
        0.173,
        3.7,
        159.4,
        219.4
      ],
      [
        4,
        4,
        -0.195,
        -0.569,
        0.418,
        0.008,
        17.6,
        76.6,
        138.7
      ],
      [
        4,
        4,
        0.045,
        0.331,
        0.759,
        0.34,
        81.5,
        47.6,
        134.6
      ],
      [
        4,
        1,
        -0.004,
        0.115,
        0.508,
        0.158,
        -19.4,
        -8.4,
        -9.1
      ],
      [
        4,
        4,
        -0.114,
        0.04,
        0.675,
        0.176,
        -13.2,
        -63.2,
        99.8
      ],
      [
        4,
        2,
        0.379,
        -0.309,
        0.81,
        0.128,
        25.9,
        172.2,
        145.2
      ],
      [
        4,
        4,
        -0.071,
        0.05,
        0.709,
        0.288,
        14.8,
        -5.0,
        56.0
      ],
      [
        4,
        2,
        0.086,
        -0.07,
        0.672,
        0.237,
        -29.3,
        47.0,
        -21.8
      ],
      [
        4,
        2,
        0.09,
        -0.353,
        0.704,
        0.05,
        65.5,
        86.8,
        35.3
      ],
      [
        4,
        2,
        0.259,
        -0.033,
        0.707,
        0.047,
        6.2,
        103.9,
        -60.9
      ],
      [
        4,
        0,
        0.246,
        1.04,
        0.818,
        1.034,
        296.9,
        -45.3,
        -116.2
      ],
      [
        4,
        2,
        0.456,
        -0.656,
        0.974,
        -0.765,
        -78.0,
        175.8,
        13.5
      ],
      [
        4,
        4,
        -0.149,
        0.028,
        0.622,
        0.24,
        3.8,
        -54.9,
        84.6
      ],
      [
        4,
        2,
        0.433,
        -0.424,
        0.713,
        0.156,
        -1.8,
        54.3,
        -41.1
      ],
      [
        4,
        4,
        -0.259,
        -0.84,
        0.518,
        0.166,
        92.9,
        81.8,
        172.9
      ],
      [
        4,
        0,
        0.112,
        0.635,
        0.735,
        0.334,
        59.8,
        -29.8,
        -25.9
      ],
      [
        4,
        2,
        0.725,
        -0.809,
        0.938,
        -0.47,
        -27.1,
        232.2,
        30.4
      ],
      [
        4,
        1,
        0.434,
        -0.849,
        0.813,
        -0.473,
        -118.6,
        99.3,
        72.4
      ],
      [
        4,
        2,
        0.318,
        -0.074,
        0.757,
        0.341,
        64.9,
        121.5,
        45.7
      ],
      [
        4,
        5,
        0.231,
        -0.684,
        -0.272,
        0.004,
        -115.1,
        71.4,
        -241.9
      ],
      [
        4,
        5,
        0.166,
        -0.005,
        0.716,
        0.317,
        4.2,
        19.0,
        -83.2
      ],
      [
        4,
        4,
        -0.032,
        -0.031,
        0.707,
        0.262,
        -2.7,
        -9.5,
        190.5
      ],
      [
        4,
        2,
        0.69,
        -0.785,
        0.942,
        -0.469,
        -8.7,
        248.1,
        43.5
      ],
      [
        4,
        5,
        0.259,
        1.04,
        0.78,
        0.806,
        165.5,
        -62.4,
        -201.4
      ],
      [
        4,
        4,
        0.007,
        0.081,
        0.707,
        0.275,
        1.2,
        4.2,
        111.8
      ],
      [
        4,
        2,
        0.095,
        -0.001,
        0.771,
        0.232,
        16.9,
        140.7,
        98.6
      ],
      [
        4,
        0,
        0.053,
        0.572,
        0.727,
        0.311,
        65.7,
        32.3,
        55.7
      ],
      [
        4,
        5,
        -0.059,
        0.006,
        0.735,
        0.181,
        -37.7,
        7.0,
        -41.1
      ],
      [
        4,
        4,
        -0.104,
        0.083,
        0.726,
        0.307,
        -30.0,
        -86.1,
        196.3
      ],
      [
        4,
        1,
        -0.234,
        -1.02,
        0.832,
        -0.51,
        -129.7,
        10.3,
        62.4
      ],
      [
        4,
        5,
        0.456,
        -0.472,
        0.69,
        0.127,
        -41.6,
        40.8,
        -81.5
      ],
      [
        4,
        4,
        -0.062,
        0.032,
        0.688,
        0.25,
        -8.5,
        -45.0,
        91.7
      ],
      [
        4,
        2,
        0.483,
        -0.355,
        0.807,
        0.113,
        14.4,
        110.9,
        14.2
      ],
      [
        4,
        2,
        0.493,
        -0.712,
        1.005,
        -0.724,
        -109.7,
        209.2,
        -0.9
      ],
      [
        4,
        4,
        -0.148,
        -0.043,
        0.613,
        0.234,
        -5.3,
        -45.5,
        59.2
      ],
      [
        4,
        4,
        -0.047,
        0.3,
        0.574,
        0.41,
        90.6,
        -27.8,
        93.0
      ],
      [
        4,
        2,
        0.017,
        -0.543,
        0.963,
        -0.671,
        -91.7,
        198.5,
        55.4
      ],
      [
        4,
        2,
        0.688,
        -0.805,
        0.941,
        -0.478,
        -21.2,
        235.8,
        44.2
      ],
      [
        4,
        0,
        0.171,
        0.777,
        0.678,
        0.845,
        217.1,
        -123.0,
        22.2
      ],
      [
        4,
        2,
        0.047,
        -0.149,
        0.743,
        0.073,
        43.8,
        93.7,
        29.5
      ],
      [
        4,
        4,
        0.27,
        -0.214,
        0.812,
        0.147,
        37.1,
        163.5,
        179.9
      ],
      [
        4,
        2,
        0.444,
        -0.764,
        0.941,
        -0.753,
        -57.6,
        154.3,
        26.7
      ],
      [
        4,
        2,
        0.627,
        -0.743,
        0.997,
        -0.685,
        -96.3,
        216.9,
        96.8
      ],
      [
        4,
        2,
        0.438,
        -0.33,
        0.841,
        0.056,
        16.3,
        241.7,
        149.0
      ],
      [
        4,
        5,
        0.396,
        -0.37,
        0.572,
        0.362,
        -18.4,
        145.9,
        -208.6
      ],
      [
        4,
        1,
        0.096,
        -0.933,
        0.923,
        -0.763,
        -212.3,
        74.1,
        22.4
      ],
      [
        4,
        0,
        -0.142,
        -0.996,
        0.594,
        0.325,
        38.8,
        -6.8,
        -23.4
      ],
      [
        4,
        5,
        0.345,
        -0.205,
        0.683,
        0.086,
        -1.9,
        62.7,
        -96.2
      ],
      [
        4,
        0,
        0.21,
        1.04,
        0.74,
        0.875,
        277.0,
        -136.4,
        -79.4
      ],
      [
        4,
        2,
        0.642,
        -0.713,
        0.982,
        -0.613,
        -24.7,
        251.0,
        34.3
      ],
      [
        4,
        1,
        0.178,
        -0.076,
        0.649,
        0.178,
        -23.7,
        17.3,
        -8.2
      ],
      [
        4,
        2,
        0.66,
        -0.779,
        0.906,
        -0.365,
        2.5,
        235.7,
        37.9
      ],
      [
        4,
        4,
        -0.086,
        0.024,
        0.699,
        0.306,
        2.7,
        0.0,
        62.4
      ],
      [
        4,
        1,
        0.031,
        -0.862,
        0.024,
        -0.038,
        -145.7,
        85.0,
        -128.4
      ],
      [
        4,
        2,
        0.442,
        -0.481,
        0.783,
        0.3,
        41.4,
        193.2,
        -138.4
      ],
      [
        4,
        4,
        -0.022,
        0.007,
        0.694,
        0.31,
        27.3,
        -59.1,
        142.7
      ],
      [
        4,
        1,
        0.091,
        -0.05,
        0.709,
        0.289,
        -30.2,
        -25.7,
        7.7
      ],
      [
        4,
        4,
        -0.166,
        -0.008,
        0.731,
        0.322,
        -39.6,
        -71.2,
        182.5
      ],
      [
        4,
        4,
        -0.326,
        -0.228,
        0.715,
        0.263,
        -20.5,
        -49.7,
        140.8
      ],
      [
        4,
        4,
        0.143,
        -0.004,
        0.597,
        0.233,
        55.8,
        -47.0,
        176.8
      ],
      [
        4,
        1,
        -0.045,
        0.007,
        0.727,
        0.073,
        -56.7,
        -34.9,
        26.7
      ],
      [
        4,
        2,
        0.296,
        -0.518,
        0.667,
        0.028,
        -48.2,
        91.4,
        -77.2
      ],
      [
        4,
        5,
        0.156,
        -0.754,
        -0.284,
        -0.018,
        -120.8,
        73.9,
        -222.7
      ],
      [
        4,
        2,
        0.319,
        -0.252,
        0.838,
        0.073,
        11.6,
        165.9,
        160.4
      ],
      [
        4,
        0,
        0.228,
        1.027,
        0.805,
        0.902,
        302.6,
        -18.6,
        -90.8
      ],
      [
        4,
        2,
        -0.008,
        -0.862,
        0.505,
        -0.125,
        -15.0,
        155.5,
        101.2
      ],
      [
        4,
        4,
        -0.031,
        0.102,
        0.765,
        0.172,
        25.0,
        56.2,
        148.3
      ],
      [
        4,
        4,
        0.014,
        -0.117,
        0.728,
        0.206,
        -15.5,
        -2.4,
        109.1
      ],
      [
        4,
        2,
        0.408,
        -0.663,
        0.953,
        -0.753,
        -96.2,
        163.8,
        32.4
      ],
      [
        4,
        3,
        0.286,
        -0.016,
        0.714,
        0.329,
        52.5,
        -122.6,
        47.5
      ],
      [
        4,
        0,
        0.25,
        0.107,
        0.64,
        0.196,
        17.3,
        -16.4,
        1.7
      ],
      [
        4,
        2,
        0.536,
        -0.661,
        0.952,
        -0.514,
        -20.3,
        224.3,
        52.9
      ],
      [
        4,
        2,
        0.353,
        -0.743,
        0.913,
        -0.692,
        -39.2,
        127.8,
        40.2
      ],
      [
        4,
        4,
        0.112,
        -0.226,
        0.757,
        0.191,
        27.6,
        69.8,
        127.9
      ],
      [
        4,
        0,
        0.12,
        0.651,
        0.807,
        0.67,
        192.2,
        33.7,
        130.6
      ],
      [
        4,
        4,
        0.102,
        0.317,
        0.723,
        0.451,
        103.9,
        -78.5,
        107.4
      ],
      [
        4,
        5,
        0.274,
        0.933,
        0.825,
        0.981,
        125.2,
        5.0,
        -203.2
      ],
      [
        4,
        3,
        -0.045,
        -0.034,
        0.681,
        0.359,
        -11.9,
        -71.0,
        43.4
      ],
      [
        4,
        5,
        0.367,
        -0.345,
        0.671,
        0.131,
        -42.8,
        4.9,
        -51.3
      ],
      [
        4,
        4,
        0.139,
        0.02,
        0.701,
        0.47,
        76.4,
        -7.0,
        108.6
      ],
      [
        4,
        1,
        -0.02,
        -0.001,
        0.687,
        0.252,
        -58.2,
        -46.6,
        37.3
      ],
      [
        4,
        5,
        0.369,
        -0.181,
        0.593,
        0.277,
        -16.4,
        68.9,
        -294.7
      ],
      [
        4,
        2,
        0.168,
        -0.63,
        0.678,
        0.03,
        10.1,
        47.1,
        -35.2
      ],
      [
        4,
        0,
        0.095,
        0.456,
        0.778,
        0.845,
        219.3,
        -10.7,
        -8.8
      ],
      [
        4,
        0,
        -0.266,
        -1.02,
        0.625,
        0.329,
        66.3,
        -15.3,
        5.3
      ],
      [
        4,
        2,
        0.626,
        -0.65,
        0.715,
        0.287,
        42.2,
        141.2,
        91.5
      ],
      [
        4,
        4,
        -0.005,
        0.189,
        0.593,
        0.151,
        18.0,
        68.5,
        109.4
      ],
      [
        4,
        5,
        0.167,
        0.437,
        0.716,
        0.233,
        -15.4,
        74.5,
        -78.5
      ],
      [
        4,
        5,
        0.376,
        -0.388,
        0.813,
        0.05,
        -69.1,
        128.3,
        -299.9
      ],
      [
        4,
        2,
        0.62,
        -0.759,
        0.642,
        0.246,
        18.4,
        93.9,
        -6.5
      ],
      [
        4,
        4,
        -0.134,
        -0.041,
        0.738,
        0.212,
        6.8,
        -49.6,
        96.6
      ],
      [
        4,
        2,
        0.723,
        -0.816,
        0.931,
        -0.483,
        -22.2,
        226.1,
        64.7
      ],
      [
        4,
        1,
        -0.079,
        -0.907,
        0.93,
        -0.934,
        -232.8,
        65.8,
        69.0
      ],
      [
        4,
        2,
        0.678,
        -0.759,
        0.962,
        -0.572,
        -19.2,
        237.0,
        52.4
      ],
      [
        4,
        2,
        0.692,
        -0.787,
        0.935,
        -0.473,
        -28.0,
        203.0,
        11.0
      ],
      [
        4,
        4,
        0.079,
        0.572,
        0.738,
        0.766,
        139.2,
        -81.4,
        145.3
      ],
      [
        4,
        4,
        0.003,
        0.042,
        0.769,
        0.37,
        -3.0,
        -45.3,
        131.7
      ],
      [
        4,
        1,
        0.056,
        -0.877,
        0.713,
        -0.096,
        -44.1,
        -22.7,
        14.8
      ],
      [
        4,
        1,
        0.18,
        0.17,
        0.707,
        0.261,
        -108.9,
        -19.7,
        -40.5
      ],
      [
        4,
        4,
        -0.047,
        -0.172,
        0.742,
        0.245,
        -6.8,
        -17.9,
        146.1
      ],
      [
        4,
        2,
        -0.207,
        -0.814,
        0.466,
        0.101,
        5.5,
        88.7,
        84.2
      ],
      [
        4,
        2,
        0.554,
        -0.541,
        0.839,
        -0.261,
        -84.5,
        191.7,
        54.2
      ],
      [
        4,
        4,
        -0.103,
        -0.079,
        0.688,
        0.372,
        42.6,
        -2.9,
        58.2
      ],
      [
        4,
        2,
        0.297,
        -0.208,
        0.714,
        0.152,
        -3.9,
        56.6,
        14.2
      ],
      [
        4,
        2,
        0.223,
        0.16,
        0.631,
        0.148,
        -7.8,
        94.4,
        -65.1
      ],
      [
        4,
        0,
        -0.318,
        -0.905,
        0.42,
        0.118,
        121.5,
        90.5,
        104.8
      ],
      [
        4,
        4,
        0.361,
        -0.268,
        0.843,
        0.199,
        68.2,
        182.6,
        188.8
      ],
      [
        4,
        1,
        0.238,
        -0.794,
        0.685,
        0.001,
        -53.7,
        19.5,
        28.0
      ],
      [
        4,
        2,
        0.218,
        -0.862,
        0.801,
        -0.484,
        -92.9,
        99.9,
        61.9
      ],
      [
        4,
        1,
        -0.084,
        -0.95,
        0.976,
        -1.04,
        -245.5,
        68.9,
        59.4
      ],
      [
        4,
        0,
        0.256,
        1.04,
        0.818,
        1.027,
        297.9,
        -7.9,
        -178.1
      ],
      [
        4,
        5,
        0.203,
        0.653,
        0.728,
        0.346,
        46.7,
        -28.2,
        -66.1
      ],
      [
        4,
        0,
        0.249,
        1.04,
        0.806,
        1.0,
        290.0,
        -74.2,
        -113.9
      ],
      [
        4,
        4,
        0.162,
        0.029,
        0.699,
        0.286,
        -4.0,
        -21.3,
        93.0
      ],
      [
        4,
        3,
        -0.039,
        0.047,
        0.706,
        0.31,
        7.1,
        -35.6,
        23.8
      ],
      [
        4,
        2,
        0.34,
        -0.308,
        0.482,
        0.039,
        -70.4,
        76.0,
        -41.3
      ],
      [
        4,
        5,
        0.302,
        0.232,
        0.693,
        0.392,
        -21.1,
        -22.3,
        -256.8
      ],
      [
        4,
        1,
        0.084,
        -0.884,
        0.969,
        -1.04,
        -221.8,
        36.0,
        41.3
      ],
      [
        4,
        5,
        0.292,
        -0.448,
        0.622,
        -0.022,
        -20.6,
        77.4,
        -78.7
      ],
      [
        4,
        4,
        -0.048,
        0.013,
        0.786,
        0.218,
        -15.4,
        -18.7,
        52.4
      ],
      [
        4,
        0,
        0.118,
        0.497,
        0.762,
        0.829,
        137.7,
        -20.5,
        16.3
      ],
      [
        4,
        0,
        -0.247,
        -1.031,
        0.659,
        0.254,
        23.2,
        -2.6,
        1.5
      ],
      [
        4,
        0,
        0.269,
        1.021,
        0.83,
        1.04,
        245.9,
        -33.2,
        -185.5
      ],
      [
        4,
        2,
        0.566,
        -0.53,
        0.791,
        0.231,
        4.7,
        215.5,
        29.1
      ],
      [
        4,
        1,
        0.019,
        -0.924,
        0.711,
        -0.143,
        -88.2,
        4.5,
        33.1
      ],
      [
        4,
        1,
        0.026,
        -0.953,
        0.827,
        -0.364,
        -202.8,
        47.7,
        34.9
      ],
      [
        4,
        0,
        0.086,
        0.58,
        0.714,
        0.369,
        69.6,
        49.2,
        50.1
      ],
      [
        4,
        5,
        0.363,
        -0.438,
        0.677,
        0.039,
        -51.2,
        36.8,
        -71.1
      ],
      [
        4,
        2,
        0.618,
        -0.782,
        0.988,
        -0.654,
        -115.9,
        194.4,
        82.2
      ],
      [
        4,
        4,
        -0.067,
        0.062,
        0.568,
        0.157,
        77.9,
        58.6,
        86.4
      ],
      [
        4,
        4,
        0.075,
        -0.053,
        0.752,
        0.277,
        -56.7,
        59.0,
        96.9
      ],
      [
        4,
        1,
        0.021,
        -0.902,
        0.838,
        -0.503,
        -86.3,
        17.8,
        35.4
      ],
      [
        4,
        5,
        0.413,
        -0.392,
        0.719,
        0.269,
        -3.9,
        107.6,
        -127.8
      ],
      [
        4,
        2,
        -0.148,
        -0.003,
        0.709,
        0.062,
        -25.4,
        96.5,
        -22.9
      ],
      [
        4,
        4,
        -0.051,
        0.057,
        0.663,
        0.23,
        -54.4,
        -22.1,
        118.2
      ],
      [
        4,
        2,
        0.322,
        -0.279,
        0.784,
        0.198,
        19.5,
        165.4,
        150.1
      ],
      [
        4,
        2,
        -0.279,
        -0.922,
        0.796,
        -0.352,
        -46.7,
        165.1,
        8.8
      ],
      [
        4,
        2,
        0.248,
        -0.033,
        0.757,
        0.08,
        -91.0,
        124.9,
        -29.3
      ],
      [
        4,
        5,
        0.597,
        -0.449,
        0.695,
        0.19,
        -15.1,
        35.7,
        -93.1
      ],
      [
        4,
        0,
        0.16,
        0.79,
        0.798,
        0.67,
        218.3,
        47.8,
        46.2
      ],
      [
        4,
        0,
        0.141,
        0.466,
        0.726,
        0.271,
        62.5,
        44.2,
        13.4
      ],
      [
        4,
        0,
        0.219,
        0.712,
        0.8,
        0.798,
        293.3,
        61.6,
        26.5
      ],
      [
        4,
        0,
        0.286,
        0.992,
        0.849,
        1.04,
        228.5,
        69.7,
        -175.4
      ],
      [
        4,
        4,
        -0.077,
        0.015,
        0.725,
        0.299,
        -21.0,
        -9.8,
        90.0
      ],
      [
        4,
        2,
        0.31,
        -0.171,
        0.757,
        0.319,
        71.9,
        113.7,
        89.8
      ],
      [
        4,
        0,
        -0.248,
        -1.04,
        0.548,
        0.347,
        34.3,
        -16.0,
        -3.1
      ],
      [
        4,
        5,
        0.302,
        0.599,
        0.721,
        0.599,
        99.3,
        -29.2,
        -239.8
      ],
      [
        4,
        5,
        0.212,
        -0.127,
        0.703,
        0.25,
        -5.3,
        23.2,
        -61.1
      ],
      [
        4,
        2,
        0.219,
        -0.589,
        0.619,
        0.073,
        -20.6,
        57.5,
        -49.7
      ],
      [
        4,
        2,
        -0.316,
        -0.971,
        0.752,
        -0.335,
        -46.6,
        151.2,
        18.7
      ],
      [
        4,
        0,
        0.242,
        0.315,
        0.769,
        0.533,
        234.3,
        12.3,
        118.4
      ],
      [
        4,
        1,
        0.006,
        -0.886,
        0.728,
        -0.167,
        -70.1,
        -3.7,
        56.6
      ],
      [
        4,
        4,
        0.038,
        0.446,
        0.76,
        0.256,
        27.9,
        54.3,
        88.9
      ],
      [
        4,
        2,
        0.177,
        0.438,
        0.69,
        0.009,
        13.6,
        130.9,
        -86.3
      ],
      [
        4,
        1,
        0.128,
        -0.814,
        0.653,
        -0.097,
        -63.3,
        1.9,
        -0.1
      ],
      [
        4,
        2,
        0.493,
        -0.704,
        0.98,
        -0.793,
        -59.9,
        192.5,
        -3.1
      ],
      [
        4,
        1,
        0.451,
        -0.402,
        0.688,
        0.296,
        -32.8,
        -15.4,
        -27.8
      ]
    ],
    "elapsed_sec": 21.1
  },
  "wide_pool_overhead": [
    {
      "robot": "Franka Panda",
      "kind": "Arm",
      "dof": 7,
      "overhead_pct": 0.2
    },
    {
      "robot": "UR5e",
      "kind": "Arm",
      "dof": 6,
      "overhead_pct": 0.9
    },
    {
      "robot": "KUKA IIWA",
      "kind": "Arm",
      "dof": 7,
      "overhead_pct": 1.1
    },
    {
      "robot": "Kinova Gen3",
      "kind": "Arm",
      "dof": 7,
      "overhead_pct": 1.8
    },
    {
      "robot": "AgileX Piper",
      "kind": "Arm",
      "dof": 6,
      "overhead_pct": 2.4
    },
    {
      "robot": "Galaxea R1",
      "kind": "Dual Arm",
      "dof": 14,
      "overhead_pct": 2.9
    },
    {
      "robot": "Unitree G1 Arms",
      "kind": "Humanoid",
      "dof": 14,
      "overhead_pct": 3.5
    },
    {
      "robot": "Dexterous Hand (20-DoF)",
      "kind": "Hand",
      "dof": 20,
      "overhead_pct": 48.0
    },
    {
      "robot": "Shadow / Allegro Hand",
      "kind": "Hand",
      "dof": 24,
      "overhead_pct": 154.0
    }
  ]
};
